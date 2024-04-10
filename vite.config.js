import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
module.exports = {
  publicPath: '/repository-name/'
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/repository-name/'
})
