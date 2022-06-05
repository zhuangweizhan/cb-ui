import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import { defineConfig } from "vite"
import viteDemoCodePlugin from "./plugins/vue-demo-code-plugin"

export default defineConfig(({ mode }) => {
  return {
    resolve: {
      alias: [
        {
          find: "@",
          replacement: resolve(__dirname, "./src")
        }
      ]
    },
    build: {
      assetsDir: "./vue3/"
    },
    server: {
      host: "0.0.0.0",
      port: 3000
    },
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "./src")
      }
    ],
    plugins: [vue(), viteDemoCodePlugin]
  }
})
