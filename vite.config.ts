// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  base: "/sparkling-founder-forge/",
  resolve: {
     alias: { "@": new URL("./src", import.meta.url).pathname }  // 👈
  }
});
