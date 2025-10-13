import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'path'

export const createCopyWebConfigPlugin = (environment, mode, distFolder) => ({
  name: 'copy-web-config',
  closeBundle: () => {
    // Only apply this plugin for spa and pwa modes
    if (!['spa', 'pwa'].includes(mode)) {
      console.log(`Skipping web.config copy for mode: ${mode}`)
      return
    }

    // Build the config file name: web.config.{environment}.{mode}
    // e.g., web.config.production.spa, web.config.development.pwa
    const webConfigSource = `server-config/web.config.${environment}.${mode}`

    // Verify the source file exists
    if (!existsSync(webConfigSource)) {
      console.warn(`Web config file not found: ${webConfigSource}`)
      return
    }

    // Copy the web.config to the dist folder
    const targetPath = path.join(distFolder, 'web.config')
    const content = readFileSync(webConfigSource)
    writeFileSync(targetPath, content)
    console.log(`✅ Copied ${webConfigSource} → ${targetPath}`)
  },
})
