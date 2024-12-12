import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "blog",
  description: "quhou's blog",
  srcDir: "./",
  vite: {
    plugins: [
      UnoCSS()
    ],
    build: {
      minify: "esbuild",
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
