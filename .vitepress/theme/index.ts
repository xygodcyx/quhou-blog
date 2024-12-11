// https://vitepress.dev/guide/custom-theme

import '@unocss/reset/tailwind.css'
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './style.css'
import "uno.css";

// Custom components
import TextIcon from './Components/Icon/TextIcon.vue'
import LinkText from './Components/Link/LinkText.vue'
export default {
  ...DefaultTheme,
  Layout: () => {
    return h(Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('TextIcon', TextIcon)
    app.component('LinkText', LinkText)
    // ...
  }
} satisfies Theme
