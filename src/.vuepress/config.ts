import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { viteBundler } from '@vuepress/bundler-vite'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance"



export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Docs Rice-Code",
      description: "A docs demo for Rice-Code",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Rice-Code文档",
      description: "Rice-Code 的文档",
    },
  },

  theme,
  plugins: [
    mdEnhancePlugin({
      // 你的选项
    }),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
