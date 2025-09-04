import { defineConfig } from "@solidjs/start/config";
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  base: '/nalobby/',  // <-- replace with your actual repo name
  build: {
    outDir: 'dist',
  },
});
