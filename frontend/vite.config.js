import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000, // Set the local dev server port
    proxy: {
      "/api": {
        target: "https://jobportal-backend-q8wf.onrender.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
