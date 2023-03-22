import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
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

  // Enable it with pwa
  // shouldPrefetch: false,
});
