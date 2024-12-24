import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@enums': path.resolve(__dirname, 'src/enums'),
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
