import { DefaultTheme, defineConfig } from "vitepress"

function navEnGb(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Posts",
      link: "/posts/",
      activeMatch: "/posts/",
    }, {
      text: "JDevKit",
      link: "/jdevkit/",
      activeMatch: "/jdevkit/",
    },
  ]
}

export default defineConfig({
  title: "Code Wanderer",

  rewrites: {
    "en-gb/:rest*": ":rest*",
  },

  lastUpdated: true,

  locales: {
    root: {
      label: "British English",
      lang: "en-GB",
      description: "Exploring the art and science of programming, unlocking endless possibilities.",

      themeConfig: {
        nav: navEnGb(),

        footer: {
          message: "All posts on this blog are licensed under the CC-BY-NC-SA 4.0 licence unless otherwise stated. Reprinted with permission from Code Wanderer.",
          copyright: `Copyright © 2024-${new Date().getFullYear()} Zihlu Wang`,
        },
      },
    },
    "zh-hant": {
      label: "繁體中文",
      lang: "zh-Hant",
      description: "探索程式設計的藝術與科學，無限可能的起點。",

      themeConfig: {
        nav: navEnGb(),

        footer: {
          message: "",
          copyright: `Copyright © 2024-${new Date().getFullYear()} Zihlu Wang`,
        },
      },
    },
  },
})