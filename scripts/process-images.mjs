#!/usr/bin/env node
// Reads client-provided reference photos from Images-reference/ and writes
// two WebP widths (800 and 1600) into public/images/ using kebab-case
// slot names that match the ImageAsset build() helper in src/data/content.ts.
//
// Run: node scripts/process-images.mjs
//
// The folder mapping follows section 7.3 of ATUALIZACAO-MAISON-YASMINI-V2.md.

import { mkdir, readdir, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import sharp from 'sharp'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const SOURCE = join(ROOT, 'Images-reference')
const OUT = join(ROOT, 'public', 'images')

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
const SLOTS = [
  // Home / global
  { slot: 'hero', folder: FOLDER.hero, index: 1 },
  { slot: 'algarve', folder: FOLDER.algarve, index: 1 },
  { slot: 'detail', folder: FOLDER.details, index: 1 },
  { slot: 'contact-sunset', folder: FOLDER.hero, index: 2 },

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

  // Portfolio (subset — populate more as photos land)
  { slot: 'portfolio-hero-01', folder: FOLDER.hero, index: 5 },
  { slot: 'portfolio-ceremony-01', folder: FOLDER.ceremonies, index: 4 },
  { slot: 'portfolio-reception-01', folder: FOLDER.reception, index: 5 },
  { slot: 'portfolio-details-01', folder: FOLDER.details, index: 3 },
  { slot: 'portfolio-algarve-01', folder: FOLDER.algarve, index: 3 },
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

  // Emit a JSON with real dimensions for reference. Not consumed at build
  // time yet, but useful for keeping content.ts widths honest.
  const dimensionsPath = join(OUT, 'dimensions.json')
  await writeFile(dimensionsPath, JSON.stringify(dimensions, null, 2), 'utf8')
  console.log(`\n✓ Wrote ${dimensionsPath}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
