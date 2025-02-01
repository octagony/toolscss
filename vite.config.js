import cssnano from "cssnano";
import path from "path";
import { defineConfig } from "vite";
import stylelintPlugin from "vite-plugin-stylelint";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: path.resolve(__dirname, "src/index.scss"),
      output: {
        assetFileNames: () => {
          return "index.min.css";
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    postcss: {
      plugins: [cssnano({ preset: "default" })],
    },
  },
  plugins: [
    stylelintPlugin({
      fix: true,
      include: ["src/**/*.scss"],
      exclude: ["node_modules"],
    }),
  ],
});
