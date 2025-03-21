import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.pdf'],
  optimizeDeps: {
    include: ['@popperjs/core']
  }
});