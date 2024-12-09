import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "Peter·Pan的博客",
  description: "这是Peter·Pan的个人博客网站",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
