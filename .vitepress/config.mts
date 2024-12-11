import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "blog",
  description: "quhou's blog",
  vite: {
    plugins: [
      UnoCSS()
    ]
  },
  themeConfig: {

  }
})
