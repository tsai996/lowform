import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import {viteMockServe} from "vite-plugin-mock";
import Unocss from 'unocss/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/lowform-design',
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    vueSetupExtend(),
    viteMockServe({
      mockPath: './src/mock',
      localEnabled: true,
      prodEnabled: true,
      injectCode: ` import { setupProdMockServer } from './mockProdServer'; setupProdMockServer(); `,
    }),
    Unocss({
      configFile: './uno.config.ts'
    }),
    Components({
      extensions: ['vue', 'tsx', 'md'],
      globs: ['src/components/*/*.vue', 'src/components/*/*.tsx'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.[tj]sx?$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass'
        })
      ],
      dts: 'src/typings/components.d.ts'
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
      resolvers: [ElementPlusResolver()],
      dts: 'src/typings/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json'
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: { api: 'modern-compiler' },
    }
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        sanitizeFileName(name) {
          const match = /^[a-z]:/i.exec(name)
          const driveLetter = match ? match[0] : ''
          return (
            driveLetter +
            // eslint-disable-next-line no-control-regex
            name.substring(driveLetter.length).replace(/[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g, '')
          )
        }
      }
    }
  }
})
