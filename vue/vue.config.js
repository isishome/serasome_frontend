module.exports = {
  pages: {
    index: {
      entry: 'src/main/seras.js',
      template: 'public/seras.html',
      filename: 'index.html'
    },
    d2r: {
      entry: 'src/main/d2r.js',
      template: 'public/d2r.html',
      filename: 'd2r.html'
    }
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
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
  outputDir: '../dist',
  assetsDir: 'static'
}