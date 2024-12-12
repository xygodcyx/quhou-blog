import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "blog",
  description: "quhou's blog",
  srcDir: "./",
  markdown: {
  },
  vite: {
    plugins: [
      UnoCSS()
    ],
    server: {
      // https: process.env.NODE_ENV === 'development' ? {
      //   key: path.resolve(__dirname, "../../", 'localhost.key'),
      //   cert: path.resolve(__dirname, "../../", 'localhost.crt'),
      // } : {}
    }
  },
  themeConfig: {
    lastUpdated: {
      formatOptions: {
        forceLocale: true
      }
    }
  }
})
