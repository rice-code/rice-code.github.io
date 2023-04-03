import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/basic/": [
    {
      icon: "discover",
      text: "快速上手",
      prefix: "quickStart/",
      link: "quickStart/",
      children: "structure",
    },
    {
      icon: "discover",
      text: "组件",
      prefix: "comp/",
      link: "comp/",
      children: "structure",
    },
    {
      icon: "discover",
      text: "实践",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
  ],
    "/zh/ctl/": [
        {
            icon: "discover",
            text: "功能",
            prefix: "ability/",
            link: "ability/",
            children: "structure",
        },
    ],
});
