import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    port: 3001, //cổng mà máy chủ phát triển của Vite sẽ lắng nghe
    // Định nghĩa một proxy để xử lý các yêu cầu có URL chứa / api.
    // Khi ứng dụng Vue gửi yêu cầu với URL bắt đầu bằng / api, nó sẽ được chuyển hướng tới target mà chúng ta đặt ra.
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        //Proxy sẽ thay đổi nguồn gốc của yêu cầu từ ứng dụng Vue sang API server, tránh CORS
        changeOrigin: true,
      },
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
