import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/khizra-portfolio-react/', // Aapke repo ka sahi naam yahan hona chahiye
  plugins: [react()],
})