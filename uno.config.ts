import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      unit: 'em',
    }),
  ],
  rules: [
    ["text-overflow-ellipsis", { "text-overflow": "ellipsis", "white-space": "nowrap", "overflow": "hidden" }],
    ["/^box-overflow-line-\d$/", { "display": "-webkit-box", "-webkit-line-clamp": "$match", "-webkit-box-orient": "vertical", "overflow": "hidden" }],
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
