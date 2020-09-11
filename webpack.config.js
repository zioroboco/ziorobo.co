const webpack = require("webpack")
const WebpackModules = require("webpack-modules")
const path = require("path")
const config = require("sapper/config/webpack.js")
const pkg = require("./package.json")
const { mdsvex } = require("mdsvex")

const mode = process.env.NODE_ENV
const dev = mode === "development"

const alias = { svelte: path.resolve("node_modules", "svelte") }
const extensions = [".mjs", ".js", ".json", ".svelte", ".svx", ".html"]
const mainFields = ["svelte", "module", "browser", "main"]

const svelteRule = options => ({
  test: /\.(svelte|svx|html)$/,
  use: {
    loader: "svelte-loader",
    options: {
      preprocess: [
        mdsvex({
          extension: ".svx",
          smartypants: false, // causes parsing errors in inline js 🤔
        }),
      ],
      ...options,
    },
  },
})

module.exports = {
  client: {
    entry: config.client.entry(),
    output: config.client.output(),
    resolve: { alias, extensions, mainFields },
    module: {
      rules: [
        svelteRule({
          hydratable: true,
          hotReload: false,
          dev,
        }),
      ],
    },
    mode,
    plugins: [
      new webpack.DefinePlugin({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
    ].filter(Boolean),
    devtool: dev && "inline-source-map",
  },

  server: {
    entry: config.server.entry(),
    output: config.server.output(),
    target: "node",
    resolve: { alias, extensions, mainFields },
    externals: Object.keys(pkg.dependencies).concat("encoding"),
    module: {
      rules: [
        svelteRule({
          css: false,
          generate: "ssr",
          hydratable: true,
          dev,
        }),
      ],
    },
    mode,
    plugins: [new WebpackModules()],
    performance: {
      hints: false,
    },
  },

  serviceworker: {
    entry: config.serviceworker.entry(),
    output: config.serviceworker.output(),
    mode,
  },
}
