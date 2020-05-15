/* eslint-disable @typescript-eslint/no-var-requires */
const autoprefixer = require("autoprefixer");
const pxtoviewport = require("postcss-px-to-viewport");
const port = process.env.port || 9090;

module.exports = {
  // lintOnSave: false,
  devServer: {
    port, // 设置端口号
    open: true, // 启动时打开页面
    overlay: {
      // 有错误时覆盖页面
      warnings: false,
      errors: true,
    },
  },
  outputDir: "dist",
  publicPath: process.env.NODE_ENV === "production" ? "/vant-demo/" : "/",
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 375,
          }),
        ],
      },
    },
  },
};
