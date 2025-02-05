import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Vladimir Mayevsky",
        short_name: "Vladimir May",
        description: "Personal website of Vladimir Mayevsky, a frontend developer",
        start_url: "/",
        display: "standalone",
        theme_color: "#121212",
        background_color: "#ffffff",
        icons: [
          {
            src: "src/assets/img/favicon.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "src/assets/img/favicon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "assets/preview.jpg",
            sizes: "1200x630",
            type: "image/jpg",
          },
        ],
      },
    }),
  ],
});
