import { defineConfig } from "@solidjs/start/config";
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  base: '/project-name/',  // <-- replace with your actual repo name
  build: {
    outDir: 'dist',
  },
});
