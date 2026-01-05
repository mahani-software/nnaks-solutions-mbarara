import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true }, // Test SW in dev mode
      workbox: {
        globPatterns: ['**/*.{js,jsx,css,html,ico,png,svg}'],
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'NNAKS',
        short_name: 'nnaks',
        description: 'Networked software-as-a-service',
        theme_color: '#ffffff',
        icons: [],
      },
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
