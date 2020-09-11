<script>
  import Tailwind from "../components/Tailwind.svelte"
  import Nav from "../components/Nav.svelte"

  export let segment
</script>

<Tailwind />

<Nav {segment} />

<main>
  <slot />
</main>
