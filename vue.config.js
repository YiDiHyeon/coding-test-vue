const { defineConfig } = require('@vue/cli-service')

function resolve(dir) {
  return require('path').join(__dirname, dir)
}

const plugins = []
if (process.env.VUE_APP_ENV === 'bundleAnalyzer') {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  plugins.push(new BundleAnalyzerPlugin())
}

module.exports = defineConfig({
  chainWebpack(config) {
    // set svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
  },
  transpileDependencies: true,
})
