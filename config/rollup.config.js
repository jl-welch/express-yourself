import { resolve as pathResolve } from "path";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";

module.exports = {
  input: pathResolve(__dirname, "../resources/javascripts/index.js"),
  output: {
    file: pathResolve(__dirname, "../public/javascripts/index.js"),
    format: "umd",
    name: "builder",
  },
  plugins: [
    nodeResolve(),
    babel({
      exclude: "node_modules/**",
      presets: [["@babel/preset-env"]],
    }),
  ],
};
