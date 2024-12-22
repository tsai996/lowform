import { defineConfig, presetAttributify, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  safelist: [
    'color-error',
    'color-primary'
  ],
  theme: {
    colors: {
      primary: 'var(--el-color-primary)',
      primary_dark: 'var(--el-color-primary-light-5)',
      info: 'var(--el-color-info)',
      success: 'var(--el-color-success)',
      warning: 'var(--el-color-warning)',
      error: 'var(--el-color-error)',
      fill: 'var(--el-fill-color-light)',
      text: 'var(--el-text-color-primary)',
      card: 'var(--el-bg-color-overlay)',
      background: 'var(--el-bg-color)',
      borderColor: 'var(--el-border-color-lighter)'
    }
  },
  presets: [
    presetUno({ dark: 'class' }),
    presetAttributify()
  ],
  // 自定义样式规则
  rules: [],
  // 自定义组合样式
  shortcuts: {
    bgc: 'flex red',
    'flex-col-center': 'flex-center flex-col',
    'flex-col': 'flex! flex-col',
    'flex-items-center': 'flex! items-center',
    'flex-center': 'flex-items-center justify-center',
    'flex-between': 'flex-items-center justify-between',
    'flex-space': 'flex-items-center flex-justify-between',
    'wh-full': 'w-full h-full'
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ]
})
