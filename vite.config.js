import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
module.exports = {
  publicPath: '/Todo/'
}

export default defineConfig({
  base: '/repo/',
  plugins: [react()]
});

