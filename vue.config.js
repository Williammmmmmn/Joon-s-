// vue.config.js
module.exports = {
  devServer: {
    port: 8085, // 开发服务器端口
    open: true, // 自动打开浏览器
    proxy: {
      '/api': {
        target: 'http://localhost:8085', // 后端服务的实际地址
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api': '' // 重写路径，去掉/api前缀
        }
      }
    }
  }
};