import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      react: `${__dirname}/node_modules/react`,
      tailwindcss: `${__dirname}/node_modules/tailwindcss`,
      "react-dom": `${__dirname}/node_modules/react-dom`,
      "react-hot-loader": `${__dirname}/node_modules/react-hot-loader`,
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
