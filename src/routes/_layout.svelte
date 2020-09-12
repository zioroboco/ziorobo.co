<script>
  import Tailwind from "../styles/Tailwind.svelte"
  import Global from "../styles/Global.svelte"
  import Header from "../components/Header.svelte"
  import Footer from "../components/Footer.svelte"
</script>

<style>
  main {
    margin-top: 2em;
  }
</style>

<Tailwind />
<Global />

<Header />
<main>
  <slot />
</main>
<Footer />
