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
    // config
    //   .plugin('webpack-bundle-analyzer')
    //   .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
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
    'highlight.js',
  ],
  productionSourceMap: false,
  outputDir: '../../../publish/serasome_frontend',
  assetsDir: 'static'
}