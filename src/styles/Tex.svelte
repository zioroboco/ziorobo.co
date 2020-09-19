<script>
  import { onMount } from "svelte"

  onMount(() => {
    let script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"
    document.head.append(script)

    script.onload = () => {
      MathJax = {
        tex: {
          inlineMath: [["\\$", "\\$"]],
        },
        svg: { fontCache: "global" },
      }
    }
  })
</script>

<style global>
  /* Centre-align mathjax equations: */
  .MathJax > svg {
    @apply mx-auto;
  }
</style>
