const sveltePreprocess = require("svelte-preprocess")

module.exports = {
  preprocess: sveltePreprocess(),

  kit: {
    adapter: "@sveltejs/adapter-node",

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
  },
}
