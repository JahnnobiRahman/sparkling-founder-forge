import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    // Bind to IPv4 to avoid slow IPv6 resolution on some networks
    host: "0.0.0.0",
    port: 8080,
    // Helpful on some LANs to keep the chosen port
    strictPort: true,
  },
  // Keep dev fast; disable heavy tagging plugin in dev
  plugins: [react()],
  base: '/sparkling-founder-forge/', // 👈 exact repo subpath
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
