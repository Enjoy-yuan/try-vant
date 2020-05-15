## 1.安装脚手架

```js
// 安装
vue create try-vant
// 选择配置
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router, Vuex, CSS Pre-processors, Linter
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)
? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCS
S (with dart-sass)
? Pick a linter / formatter config: Basic
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection
)Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No
```

## 2.安装 vant 并按需引入

```js
// 安装插件
cnpm i vant -S
cnpm i babel-plugin-import -D

// babel.config.js中插入
plugins: [
  [
    "import",
    {
      libraryName: "vant",
      libraryDirectory: "es",
      style: true,
    },
    "vant",
  ],
];
// main.ts中进行全局引入
import { Button, Picker, Toast } from "vant";
Vue.use(Button)
  .use(Picker)
  .use(Toast);
// 在vue文件中使用toast
this.$toast();
```

## 3.设置 viewport 适配

- 内联样式 px 将不会自动转 vw
- viewportWidth 的值不建议修改为 750，否则 vant 组件的大小也会随之缩小一倍

```js
// 安装插件
cnpm i postcss-px-to-viewport -D
// 配置vue.config.js，若没有该文件可新增该文件
const autoprefixer = require("autoprefixer");
const pxtoviewport = require("postcss-px-to-viewport");
module.exports = {
  outputDir: "dist",
  publicPath: process.env.NODE_ENV === "production" ? "/vant-demo/" : "/",
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 375
          })
        ]
      }
    }
  }
};
```
