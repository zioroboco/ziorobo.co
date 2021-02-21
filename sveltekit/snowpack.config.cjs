module.exports = {
  extends: "@sveltejs/snowpack-config",
  plugins: ["@snowpack/plugin-typescript"],
  mount: {
    ["src/components"]: "/_components",
    ["pages"]: "/_pages",
  },
  alias: {
    $components: "./src/components",
    $pages: "./pages",
  },
}
