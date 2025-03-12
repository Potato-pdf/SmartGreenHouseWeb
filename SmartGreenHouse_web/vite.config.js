import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Si usas React

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: '/postcss.config.cjs',
  },
});