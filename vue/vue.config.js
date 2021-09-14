module.exports = {
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