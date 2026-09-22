import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// ⚠️ Anteprima su GitHub Pages come PROJECT PAGE: il sito e' servito sotto
// https://markcus78.github.io/brunocasali/ , quindi base deve contenere il nome del repo.
// Quando si passera' al dominio proprio: base: "/", pathSegmentsToKeep = 0 in
// public/404.html, e public/CNAME col dominio. Le tre cose vanno cambiate INSIEME.
export default defineConfig({
  base: "/brunocasali/",
  server: {
    host: "::",
    port: 8080,
    hmr: { overlay: false },
  },
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
});
