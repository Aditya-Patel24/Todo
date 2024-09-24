import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  base: '/Todo/',  // Add this line to set the base URL
  plugins: [react()],
})
