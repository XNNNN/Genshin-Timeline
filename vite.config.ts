import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { changePackageVersion } from './build/plugins'
import { readdirSync } from 'fs'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

/**
 * 获取多入口文件
 * @returns
 */
export function getPages() {
  let pagePath = resolve(__dirname, './src/pages')
  let files: string[] = readdirSync(pagePath)
  let pages: { [key: string]: string } = {
    main: resolve(__dirname, 'index.html'),
  }
  for (let i = 0; i < files.length; i++) {
    let key = files[i].replace('.html', '')
    if (key === 'index') continue
    pages[key] = resolve(__dirname, `src/pages/${files[i]}`)
  }
  return pages
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    host: process.env.NODE_ENV !== 'production',
  },
  plugins: [
    WindiCSS(),
    changePackageVersion(),
    vue({
      refTransform: [/src/],
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  build: {
    rollupOptions: {
      input: getPages(),
    },
  },
})
