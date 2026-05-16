import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Fayl yollarını nisbi edir (böyük boşluq problemini həll edir)
  build: {
    target: 'es2015', // Modulları standart köhnə JS formatına çevirir (MIME xətasını yox edir)
  }
})
