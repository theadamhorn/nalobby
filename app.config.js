import { defineConfig } from "@solidjs/start/config";
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  base: '/nalobby/',  
  build: {
    outDir: 'dist',
  },
});
