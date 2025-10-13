import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

/**
 * Determine environment from command line arguments
 */
export const getEnvironment = (ctx) => {
  if (process.argv.includes('--pre')) return 'pre'
  if (process.argv.includes('--prod')) return 'prod'
  if (process.argv.includes('--dev')) return 'dev'
  return ctx.dev ? 'dev' : 'prod'
}

/**
 * Get existing .env files in the correct order
 */
export const getExistingEnvFiles = (environment, quasarMode, __dirname) => {
  const possibleFiles = [
    '.env',
    '.env.local',
    `.env.${environment}`,
    `.env.local.${environment}`,
    `.env.${quasarMode}`,
    `.env.local.${quasarMode}`,
    `.env.${environment}.${quasarMode}`,
    `.env.local.${environment}.${quasarMode}`,
  ]

  return possibleFiles
    .filter((file) => existsSync(resolve(__dirname, file)))
    .map((file) => `../${file}`)
}

/**
 * Load package.json and extract version
 */
export const getAppVersion = (__dirname) => {
  const packageJson = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf-8'))
  return packageJson.version
}

/**
 * Environment-specific build configuration
 */
export const ENV_CONFIG = {
  dev: { sourcemap: true, minify: 'esbuild', vueDevtools: true },
  pre: { sourcemap: false, minify: 'terser', vueDevtools: false },
  prod: { sourcemap: false, minify: 'terser', vueDevtools: false },
}
