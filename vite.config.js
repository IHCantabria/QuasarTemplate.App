/**
 * Vite Configuration for Preview
 *
 * IMPORTANT: This file is only used for "vite preview" command.
 * Quasar has its own configuration in quasar.config.js used for
 * development (quasar dev) and build (quasar build).
 *
 * This file configures the preview server to serve generated builds
 * with HTTPS and other specific settings.
 */

import { defineConfig } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
  // Plugin to generate basic SSL certificates compatible with browsers
  plugins: [basicSsl()],

  preview: {
    // Enable HTTPS with plugin-generated certificates
    https: true,

    // Host (can be overridden from command line)
    host: '127.0.0.1',

    // Automatically open browser
    open: true,

    // Strict port: fail if port is already in use instead of using another
    strictPort: true,
  },
})
