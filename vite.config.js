import { defineConfig } from 'vite'
import unocss from 'unocss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [unocss(), react()],
})
