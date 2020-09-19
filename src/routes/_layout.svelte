<script>
  import Markup from "../styles/Markup.svelte"
  import Prism from "../styles/Prism.svelte"
  import Tailwind from "../styles/Tailwind.svelte"
  import Tex from "../styles/Tex.svelte"

  import Header from "../components/Header.svelte"
</script>

<style>
  main {
    @apply pb-16;
  }
</style>

<!-- global styles -->
<Tailwind />
<Markup />
<Prism />
<Tex />

<!-- content -->
<Header />
<main>
  <slot />
</main>
