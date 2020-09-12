<script>
  import Tailwind from "../styles/Tailwind.svelte"
  import Global from "../styles/Global.svelte"
  import Header from "../components/Header.svelte"
</script>

<Tailwind />
<Global />

<Header />
<main>
  <slot />
</main>
