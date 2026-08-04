import { mkdir, readdir, rename, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const dist = new URL('../dist/', import.meta.url)
const client = new URL('../dist/client/', import.meta.url)
const server = new URL('../dist/server/', import.meta.url)

await mkdir(client, { recursive: true })
await mkdir(server, { recursive: true })

for (const entry of await readdir(dist, { withFileTypes: true })) {
  if (entry.name === 'client' || entry.name === 'server') continue
  await rename(join(fileURLToPath(dist), entry.name), join(fileURLToPath(client), entry.name))
}

await writeFile(
  new URL('index.js', server),
  `export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request)
  },
}\n`,
)
