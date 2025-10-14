import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react_portflio/', // 👈 IMPORTANT: must match your repo name exactly
  build: {
    outDir: 'dist', // default output folder
  },
})
