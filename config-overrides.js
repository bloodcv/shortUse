
const {
  override,
  addLessLoader,
  addDecoratorsLegacy,
  // addPostcssPlugins,
  fixBabelImports,
  addWebpackPlugin
} = require('customize-cra');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const LodashWebpackPlugin = require('lodash-webpack-plugin');
const rewireReactHotLoader = require('react-app-rewire-hot-loader')
// 打包配置
const addCustomize = () => config => {
  if (process.env.NODE_ENV === 'production') {
    // 关闭sourceMap
    config.devtool = false;
    // 配置打包后的文件位置
    config.output.path = __dirname + '../dist/client';
    config.output.publicPath = './client';
    // 添加js打包gzip配置
    config.plugins.push(
      new CompressionWebpackPlugin({
        test: /\.js$|\.css$/,
        threshold: 1024,
      }),
    )
  }
  return config;
}


/**
 * 生产环境是否打包 Source Map
 *
 */
const rewiredMap = () => config => {
  config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false
 
  return config
}

// 热跟新
const hotLoader = () => (config, env) => {
  config = rewireReactHotLoader(config, env)
  return config
}

// 跨域配置
const proxyApi = {
  '/api': {
    // target: '', // prod
    changeOrigin: true,
    secure: false,
    xfwd: false,
    pathRewrite: {
      '^/api': '/'
    }
  },
  /* '/store': {
    // target: '', // staging
    changeOrigin: true,
    secure: false,
    xfwd: false,
    pathRewrite: {
      '^/store': '/'
    }
  } */
}

module.exports = {
  webpack: override(
    addDecoratorsLegacy(),
    // 添加别名 需要开启的话 需要在第一行的 customize-cra 中引入 addWebpackAlias
    /* addWebpackAlias({
      ["ag-grid-react$"]: path.resolve(__dirname, "src/shared/agGridWrapper.js")
    }), */
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#1DA57A' },
      localIdentName: '[local]--[hash:base64:5]' // 自定义 CSS Modules 的 localIdentName
    }),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    // addPostcssPlugins([require('postcss-pxtorem')({ rootValue: 75, propList: ['*'], minPixelValue: 2, selectorBlackList: ['am-'] })]),
    addCustomize(),
    rewiredMap(),
    // 热跟新
    hotLoader(),
    addWebpackPlugin(
      new LodashWebpackPlugin({       
        collections: true,       
        paths: true    
      }),
    )// 美化控制台
  ),
  /* devServer: overrideDevServer(
    devServerConfig()
  ), */
  // 配置devServer
  devServer: configFunction => (proxy, allowedHost) => {
    proxy = process.env.NODE_ENV === 'development' ? proxyApi : null
    // allowedHost： 添加额外的地址
    const config = configFunction(proxy, allowedHost)
    return config
  }
}