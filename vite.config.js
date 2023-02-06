import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // preserveSymlinks: true,
    alias: [
      {
        find: "@mm-core",
        replacement: path.resolve(__dirname, "./mm-core"),
      },
    ],
  },
});
