#!/usr/bin/env node
import { spawn } from 'node:child_process'
import { mkdir, writeFile, readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

// Some sandboxed Linux environments (this repo's dev container included) don't
// ship the NSS/NSPR system libraries that Chromium links against. If those
// libraries were downloaded to CHROME_DEPS_DIR, add them to LD_LIBRARY_PATH
// before Puppeteer's Chrome spawns. Safe no-op elsewhere.
const chromeDepsDir = process.env.CHROME_DEPS_DIR
if (chromeDepsDir && existsSync(chromeDepsDir)) {
  const current = process.env.LD_LIBRARY_PATH ?? ''
  process.env.LD_LIBRARY_PATH = current ? `${chromeDepsDir}:${current}` : chromeDepsDir
}

const puppeteer = (await import('puppeteer')).default

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const DIST = join(ROOT, 'dist')
const PORT = 4173
const BASE = `http://127.0.0.1:${PORT}`

const ROUTES = [
  // EN (canonical)
  '/',
  '/services',
  '/venues',
  '/venues/luxury-resorts',
  '/venues/private-villas',
  '/venues/exclusive-restaurants',
  '/venues/country-estates',
  '/portfolio',
  '/kind-words',
  '/about',
  '/why-maison-yasmini',
  '/contact',
  '/process',
  '/faq',
  '/journal',
  '/journal/how-much-does-a-destination-wedding-in-algarve-cost',
  '/journal/best-intimate-wedding-venues-in-algarve',
  '/privacy',
  // PT (translated slugs — journal post slugs remain in EN per v3 scope)
  '/pt',
  '/pt/servicos',
  '/pt/espacos',
  '/pt/espacos/resorts-de-luxo',
  '/pt/espacos/villas-privadas',
  '/pt/espacos/restaurantes-exclusivos',
  '/pt/espacos/quintas',
  '/pt/portfolio',
  '/pt/testemunhos',
  '/pt/sobre',
  '/pt/porque-maison-yasmini',
  '/pt/contacto',
  '/pt/processo',
  '/pt/faq',
  '/pt/journal',
  '/pt/journal/how-much-does-a-destination-wedding-in-algarve-cost',
  '/pt/journal/best-intimate-wedding-venues-in-algarve',
  '/pt/privacidade',
]

if (!existsSync(DIST)) {
  console.error('dist/ not found — run `npm run build` before prerender.')
  process.exit(1)
}

const previewProcess = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
  cwd: ROOT,
  stdio: ['ignore', 'pipe', 'pipe'],
})

let previewReady = false
let logBuffer = ''
const previewReadyPromise = new Promise((resolve, reject) => {
  const onData = (chunk) => {
    const text = chunk.toString()
    logBuffer += text
    // Echo vite preview output so build logs stay diagnostic.
    process.stdout.write(text)
  }
  previewProcess.stdout.on('data', onData)
  previewProcess.stderr.on('data', onData)
  previewProcess.once('exit', (code) => {
    if (!previewReady) reject(new Error(`vite preview exited early (code ${code}). Last output:\n${logBuffer}`))
  })

  // Poll the preview server directly — more reliable than parsing stdout,
  // which changes between vite versions and can be slow to flush on Vercel.
  const startedAt = Date.now()
  const TIMEOUT_MS = 60000
  const poll = async () => {
    if (previewReady) return
    try {
      const response = await fetch(BASE, { method: 'HEAD' })
      if (response.ok || response.status === 404) {
        previewReady = true
        resolve()
        return
      }
    } catch {
      // Server not up yet — keep polling.
    }
    if (Date.now() - startedAt >= TIMEOUT_MS) {
      reject(new Error(`vite preview did not answer at ${BASE} within ${TIMEOUT_MS / 1000}s. Last output:\n${logBuffer}`))
      return
    }
    setTimeout(poll, 500)
  }
  setTimeout(poll, 500)
})

const cleanup = () => {
  if (!previewProcess.killed) previewProcess.kill('SIGTERM')
}
process.on('exit', cleanup)
process.on('SIGINT', () => {
  cleanup()
  process.exit(130)
})

try {
  await previewReadyPromise
  console.log(`vite preview ready at ${BASE}`)

  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] })

  for (const route of ROUTES) {
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    const url = `${BASE}${route}`
    console.log(`→ rendering ${route}`)
    const response = await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })
    if (!response || !response.ok()) {
      console.warn(`  · non-2xx response for ${route}, using SPA fallback HTML`)
    }
    await page.waitForSelector('#root > *', { timeout: 15000 }).catch(() => {})

    const html = await page.evaluate(() => '<!doctype html>\n' + document.documentElement.outerHTML)

    const outDir = route === '/' ? DIST : join(DIST, route.replace(/^\//, ''))
    await mkdir(outDir, { recursive: true })
    await writeFile(join(outDir, 'index.html'), html, 'utf8')

    await page.close()
  }

  await browser.close()

  const indexPath = join(DIST, 'index.html')
  const bytes = (await readFile(indexPath)).length
  console.log(`✓ prerendered ${ROUTES.length} routes (root index.html: ${bytes} bytes)`)
} catch (error) {
  console.error('prerender failed:', error)
  process.exitCode = 1
} finally {
  cleanup()
  // vite preview is a persistent server, so wait a beat and exit explicitly.
  setTimeout(() => process.exit(process.exitCode ?? 0), 200)
}
