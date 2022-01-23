module.exports = {
  pages: {
    index: {
      entry: 'src/main/seras.js',
      template: 'public/seras.html',
      filename: 'index.html'
    }
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
    config.plugins.delete('prefetch-index')
  },
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false,
      supportIE: true
    }
  },
  transpileDependencies: [
    'quasar',
    'vue-google-oauth2',
    'highlight.js',
  ],
  productionSourceMap: false,
  outputDir: '../dist',
  assetsDir: 'static'
}