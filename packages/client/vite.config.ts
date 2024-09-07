import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { PROXY_API_PREFIX, BASE_PROJECT_PREFIX } from "./src/config";

export default defineConfig({
  plugins: [react()],
  base: BASE_PROJECT_PREFIX,
  server: {
    port: 3001,
    host: true,
    proxy: {
      [PROXY_API_PREFIX]: {
        target: "http://localhost:3002",
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp(`^${PROXY_API_PREFIX}`), ""),
      },
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
  },
});
