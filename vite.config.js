import { defineConfig } from "vite";
import { resolve } from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                valuation: resolve(__dirname, "valuation.html"),
                animation: resolve(__dirname, "animation.html"),
                diagram: resolve(__dirname, "diagram.html"),
                map: resolve(__dirname, "map.html")
            }
        }
    },
    plugins: [
        ViteImageOptimizer({
            png: {
                quality: 75
            },
            jpg: {
                quality: 75
            },
            jpeg: {
                quality: 75
            },
            webp: {
                quality: 70
            },
            avif: {
                quality: 60
            }
        })
    ]
}); 