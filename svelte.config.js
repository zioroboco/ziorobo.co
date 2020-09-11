const preprocess = require("svelte-preprocess")
const { mdsvex } = require("mdsvex")

module.exports = {
  preprocess: [
    mdsvex({
      extension: ".svx",
      smartypants: false, // causes parsing errors in inline js 🤔
    }),
    preprocess({
      postcss: true,
    }),
  ],
}
