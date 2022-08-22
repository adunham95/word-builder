import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
const { resolve } = require('path')
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  plugins: [
    reactRefresh(),
    VitePWA({
      base: '/',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      registerType: 'autoUpdate',
      manifest: {
        name: 'WordBoard',
        short_name: 'WordBoard',
        description: 'Educational Resource To Build Words',
        theme_color: '#0ea47a',
        start_url: '/',
        icons: [
          {
            src: 'maskable_icon_x48.png',
            sizes: '48x48',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'maskable_icon_x72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'maskable_icon_x96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'maskable_icon_x128.png',
            sizes: '128x128',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'maskable_icon_x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'maskable_icon_x384.png',
            sizes: '384x384',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'maskable_icon_x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
})
