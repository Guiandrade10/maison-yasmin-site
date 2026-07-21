#!/usr/bin/env node
// Reads client-provided reference photos from Images-reference/ and writes
// two WebP widths (800 and 1600) into public/images/ using kebab-case
// slot names that match the ImageAsset build() helper in src/data/content.ts.
//
// Run: node scripts/process-images.mjs
//
// The folder mapping follows section 7.3 of ATUALIZACAO-MAISON-YASMINI-V2.md.

import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import sharp from 'sharp'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const SOURCE = join(ROOT, 'Images-reference')
const OUT = join(ROOT, 'public', 'images')
const DIMENSIONS_PATH = join(ROOT, 'src', 'data', 'image-dimensions.json')

const WIDTHS = [800, 1600]
const QUALITY = 80

// Folder names as they exist on disk (see `ls Images-reference/`).
const FOLDER = {
  hero: 'Hero Banner (imagem principal)',
  ceremonies: 'Cerimónias e Momentos',
  reception: 'Decoração e Receção',
  details: 'Detalhes que transmitem requinte',
  algarve: 'Destination Wedding no Algarve',
}

// slot name → { folder, sourceIndex (1-based) }
// Same source photo can feed multiple slots.
// portrait + portrait-editorial: fotos oficiais da cliente convertidas fora deste script
// (fontes em public/images/foto-*.jpeg). Este script não as toca — apenas processa
// as imagens de Images-reference/. Dimensões reais escritas no image-dimensions.json.
const SLOTS = [
  // Home / global — hero uses the sunset couple with sea view (editorial full-bleed)
  { slot: 'hero', folder: FOLDER.hero, index: 2 },
  { slot: 'algarve', folder: FOLDER.algarve, index: 1 },
  { slot: 'detail', folder: FOLDER.details, index: 1 },
  { slot: 'contact-sunset', folder: FOLDER.hero, index: 7 },

  // Services
  { slot: 'service-planning', folder: FOLDER.ceremonies, index: 1 },
  { slot: 'service-events', folder: FOLDER.reception, index: 1 },
  { slot: 'service-styling', folder: FOLDER.reception, index: 2 },
  { slot: 'styling-hero', folder: FOLDER.reception, index: 3 },

  // Venue hero + gallery per category (4 galleries × 4 photos)
  { slot: 'venue-resorts-01', folder: FOLDER.algarve, index: 2 },
  { slot: 'venue-resorts-02', folder: FOLDER.algarve, index: 3 },
  { slot: 'venue-resorts-03', folder: FOLDER.hero, index: 3 },
  { slot: 'venue-resorts-04', folder: FOLDER.hero, index: 4 },

  { slot: 'venue-villas-01', folder: FOLDER.algarve, index: 4 },
  { slot: 'venue-villas-02', folder: FOLDER.algarve, index: 5 },
  { slot: 'venue-villas-03', folder: FOLDER.reception, index: 4 },
  { slot: 'venue-villas-04', folder: FOLDER.reception, index: 5 },

  { slot: 'venue-restaurants-01', folder: FOLDER.reception, index: 6 },
  { slot: 'venue-restaurants-02', folder: FOLDER.reception, index: 7 },
  { slot: 'venue-restaurants-03', folder: FOLDER.reception, index: 8 },
  { slot: 'venue-restaurants-04', folder: FOLDER.details, index: 2 },

  { slot: 'venue-estates-01', folder: FOLDER.algarve, index: 6 },
  { slot: 'venue-estates-02', folder: FOLDER.algarve, index: 7 },
  { slot: 'venue-estates-03', folder: FOLDER.ceremonies, index: 2 },
  { slot: 'venue-estates-04', folder: FOLDER.ceremonies, index: 3 },

  // Portfolio — every source photo gets a slot; content.ts curates the display list.
  ...Array.from({ length: 7 }, (_, i) => ({ slot: `portfolio-hero-${String(i + 1).padStart(2, '0')}`, folder: FOLDER.hero, index: i + 1 })),
  ...Array.from({ length: 8 }, (_, i) => ({ slot: `portfolio-ceremony-${String(i + 1).padStart(2, '0')}`, folder: FOLDER.ceremonies, index: i + 1 })),
  ...Array.from({ length: 8 }, (_, i) => ({ slot: `portfolio-reception-${String(i + 1).padStart(2, '0')}`, folder: FOLDER.reception, index: i + 1 })),
  ...Array.from({ length: 4 }, (_, i) => ({ slot: `portfolio-details-${String(i + 1).padStart(2, '0')}`, folder: FOLDER.details, index: i + 1 })),
  ...Array.from({ length: 7 }, (_, i) => ({ slot: `portfolio-algarve-${String(i + 1).padStart(2, '0')}`, folder: FOLDER.algarve, index: i + 1 })),
]

async function findSource(folder, index) {
  const dir = join(SOURCE, folder)
  if (!existsSync(dir)) throw new Error(`Missing folder: ${folder}`)
  const entries = (await readdir(dir))
    .filter((n) => /\.(jpe?g|png|webp)$/i.test(n) && !n.endsWith('Zone.Identifier'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  const chosen = entries[index - 1]
  if (!chosen) throw new Error(`Folder "${folder}" has no photo at index ${index} (has ${entries.length})`)
  return join(dir, chosen)
}

async function processSlot({ slot, folder, index }) {
  const source = await findSource(folder, index)
  const image = sharp(source, { failOn: 'none' }).rotate()
  const metadata = await image.metadata()
  await mkdir(OUT, { recursive: true })

  const outputs = []
  for (const width of WIDTHS) {
    const target = join(OUT, `${slot}-${width}.webp`)
    await image
      .clone()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(target)
    outputs.push(target)
  }
  return { slot, source, width: metadata.width, height: metadata.height, outputs }
}

async function main() {
  if (!existsSync(SOURCE)) {
    console.error(`Images-reference/ not found at ${SOURCE}`)
    process.exit(1)
  }

  console.log(`Processing ${SLOTS.length} slots into ${OUT}`)
  const dimensions = {}
  for (const s of SLOTS) {
    try {
      const result = await processSlot(s)
      dimensions[s.slot] = { width: result.width, height: result.height }
      console.log(`  ✓ ${s.slot} ← ${s.folder}/${s.index}.jpg (source ${result.width}×${result.height})`)
    } catch (error) {
      console.error(`  ✗ ${s.slot}: ${error.message}`)
      process.exitCode = 1
    }
  }

  // Emit real dimensions to src/data — consumed by content.ts build() so
  // ImageAsset width/height match the actual files (avoids CLS + wrong ratio).
  // Merge with existing dims to preserve slots processed outside this script
  // (e.g. `portrait` and `portrait-editorial`, converted from the client's
  // official photos in public/images/foto-*.jpeg).
  await mkdir(dirname(DIMENSIONS_PATH), { recursive: true })
  let existing = {}
  if (existsSync(DIMENSIONS_PATH)) {
    try {
      existing = JSON.parse(await readFile(DIMENSIONS_PATH, 'utf8'))
    } catch {
      existing = {}
    }
  }
  const merged = { ...existing, ...dimensions }
  const sorted = Object.fromEntries(Object.keys(merged).sort().map((k) => [k, merged[k]]))
  await writeFile(DIMENSIONS_PATH, JSON.stringify(sorted, null, 2), 'utf8')
  console.log(`\n✓ Wrote ${DIMENSIONS_PATH}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
