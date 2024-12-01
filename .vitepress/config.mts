import { DefaultTheme, defineConfig } from "vitepress"

function navEnGb(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Posts",
      link: "/en-gb/posts/",
      activeMatch: "/en-gb/posts/",
    }, {
      text: "JDevKit",
      link: "/en-gb/jdevkit/",
      activeMatch: "/en-gb/jdevkit/",
    },
  ]
}

function navZhHant(): DefaultTheme.NavItem[] {
  return [
    {
      text: "貼文",
      link: "/zh-hant/posts/",
      activeMatch: "/zh-hant/posts/",
    }, {
      text: "JDevKit",
      link: "/zh-hant/jdevkit/",
      activeMatch: "/zh-hant/jdevkit/",
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

        sidebar: {
          "/posts/": {
            base: "/posts/",
            items: [
              {
                text: "Mac Terminal Hostname Displayed as 10, 172 or 192",
                link: "/mac-terminal-hostname-displayed-as-10-172-or-192"
              }
            ]
          },
          "/jdevkit/": {
            base: "/jdevkit/",
            items: [
              {
                text: "About",
                link: "index"
              },
              {
                text: "DevKit :: Core",
                link: "devkit-core"
              }
            ]
          }
        }
      },
    },
    "zh-hant": {
      label: "繁體中文",
      lang: "zh-Hant",
      description: "探索程式設計的藝術與科學，無限可能的起點。",

      themeConfig: {
        nav: navZhHant(),

        sidebar: {
          "/zh-hant/posts/": {
            base: "/zh-hant/posts/",
            items: [
              {
                text: "Mac 終端主機名稱顯示為 10，172 或 192",
                link: "/mac-terminal-hostname-displayed-as-10-172-or-192"
              }
            ]
          },
          "/jdevkit/": {
            base: "/jdevkit/",
            items: [
              {
                text: "About",
                link: "index"
              },
              {
                text: "DevKit :: Core",
                link: "devkit-core"
              }
            ]
          }
        },

        footer: {
          message: "本部落格所有文章除特別聲明外，均採用 CC-BY-NC-SA 4.0 協議。轉載請註明來自 Code Wanderer。",
          copyright: `版權所有 © 2024-${new Date().getFullYear()} Zihlu Wang`,
        },
      },
    },
  },
})