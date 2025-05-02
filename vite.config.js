import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteReact(), tailwindcss(), wasm(), topLevelAwait()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
