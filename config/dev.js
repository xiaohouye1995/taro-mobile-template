module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    API_ROOT: '"/"',
    H5_ROOT: '"/"'
  },
  mini: {},
  h5: {
    devServer: {
      proxy: {
        '/api/': {
          target: '/',
          pathRewrite: {
            '^/api/': ''
          },
          logLevel: 'debug', // 打印真实接口地址
          changeOrigin: true
        }
      }
    }
  }
}
