const preprocess = require("svelte-preprocess")
const { mdsvex } = require("mdsvex")
const { resolve } = require("path")

module.exports = {
  preprocess: [
    mdsvex({
      extension: ".svx",
      smartypants: false, // causes parsing errors in inline js 🤔
      layout: resolve(__dirname, "src/routes/_post.svelte"),
    }),
    preprocess({
      postcss: true,
    }),
  ],
}
