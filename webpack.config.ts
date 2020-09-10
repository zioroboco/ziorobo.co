import { Configuration } from "webpack"
import { resolve } from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"

type MakeConfig = (env: { production?: boolean }) => Configuration

const makeConfig: MakeConfig = ({ production }) => ({
  mode: production ? "production" : "development",
  devtool: production ? false : "source-map",
  entry: ["./src/global.css", "./src/main"],
  output: {
    path: resolve(__dirname, "build"),
  },
  resolve: {
    alias: {
      svelte: resolve("node_modules", "svelte"),
    },
    extensions: [".ts", ".mjs", ".js", ".json", ".svelte"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.json",
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            preprocess: require("svelte-preprocess")({ postcss: true }),
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "async",
    },
  },
  experiments: {
    topLevelAwait: true,
  },
})

export default makeConfig
