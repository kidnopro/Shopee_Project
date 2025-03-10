import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    //Cấu hình port cho server từ 5173 về 3000 yêu em
    port: 3000
  },
  css: { 
    devSourcemap: true
  }
})
