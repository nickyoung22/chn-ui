import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// 类似webpack-bundle-analyzer打包分析插件
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/btd/rollup-plugin-visualizer
    visualizer({
      gzipSize: false,
      brotliSize: false,

      open: false,

      emitFile: true, // 生成到dist文件夹下
      filename: '打包体积分析.html' //分析图生成的文件名
    })
  ],

  // 库模式
  // https://cn.vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: './src/dist', //输出文件名称
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: path.resolve(__dirname, './src/components/index.js'),
      formats: ['es'],
      fileName: 'chn-ui.min'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
