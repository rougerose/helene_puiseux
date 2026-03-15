import { minify } from "rollup-plugin-esbuild";

const outputPlugins = () => [process.env.NODE_ENV === "production" && minify()];

export default [
  {
    input: "src/js/index.js",
    external: ["jQuery"],
    output: {
      file: "dist/js/helene_puiseux.min.js",
      format: "iife",
      globals: { jQuery: "jQuery" },
      plugins: outputPlugins(),
    },
  },
];
