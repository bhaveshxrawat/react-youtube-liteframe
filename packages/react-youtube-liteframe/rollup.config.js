import { defineConfig } from "rollup"
import typescript from "@rollup/plugin-typescript"
import postcss from "rollup-plugin-postcss"

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "react-youtube-liteframe"
  },
  external: ["react", "react-dom"],
  plugins: [typescript({ tsconfig: "tsconfig.json" }), postcss({ minimize: true, inject: true })]
})