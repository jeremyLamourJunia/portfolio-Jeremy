import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // Exclusion d'une dépendance spécifique si nécessaire
  },
  server: {
    fs: {
      strict: true, // Option recommandée pour plus de sécurité
    },
    open: true, // Ouvre le navigateur automatiquement lors du démarrage du serveur
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});