import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
      unit: 'em',
    }),
  ],
  rules: [
    ["text-overflow-ellipsis", { "text-overflow": "ellipsis", "white-space": "nowrap", "overflow": "hidden" }]
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
