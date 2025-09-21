import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { fileURLToPath, URL } from "url"

export default defineConfig({
  plugins: [react()],
  base: "/", // ✅ important for Vercel

  build: {
    chunkSizeWarningLimit: 1600, // optional: avoid warnings
    rollupOptions: {
      output: {
        // ✅ safer chunk splitting
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  server: {
    open: true,
    port: 5173,
  },

  preview: {
    port: 5173,
  },
})
