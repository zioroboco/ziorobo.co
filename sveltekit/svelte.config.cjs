const sveltePreprocess = require("svelte-preprocess")
const { mdsvex } = require("mdsvex")

const mdsvexConfig = {
  extensions: [".md", ".svx"],
}

module.exports = {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  preprocess: [sveltePreprocess(), mdsvex(mdsvexConfig)],
  kit: {
    adapter: "@sveltejs/adapter-node",
    target: "#svelte",
  },
}
