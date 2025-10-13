export const extendViteConfiguration = (viteConf) => {
  // Build configuration - Custom Rollup options for file naming
  viteConf.build = viteConf.build || {}
  viteConf.build.rollupOptions = viteConf.build.rollupOptions || {}
  viteConf.build.rollupOptions.output = {
    ...viteConf.build.rollupOptions.output,
    entryFileNames: '[name]-ihash-[hash].js',
    chunkFileNames: '[name]-ihash-[hash].js',
    assetFileNames: '[name]-ihash-[hash].[ext]',
  }
}
