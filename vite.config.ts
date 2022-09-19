import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    // https: true
    // https: {
    //   key: readFileSync('./admin.mihoyo.com-key.pem'),
    //   cert: readFileSync('./admin.mihoyo.com.pem'),
    // },
  },
  base: './',
  resolve: {
    // 路径别名
    alias: {
      '@': resolve(__dirname, 'src'), // 设置 `@` 指向 `src` 目录
      '@comp': resolve(__dirname, 'src/components'),
    },
  },
  build: {
    // 去除 console
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
