import {sidebar} from "vuepress-theme-hope";

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
            text: "最佳实践",
            prefix: "bestPractices/",
            link: "bestPractices/",
            children: "structure",
        },
        {
            icon: "discover",
            text: "性能测试",
            prefix: "test/",
            link: "test/",
            children: "structure",
        },
        {
            icon: "discover",
            text: "demo",
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
