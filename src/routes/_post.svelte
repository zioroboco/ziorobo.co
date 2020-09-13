<script>
  export let slug
  export let title
  export let date
</script>

<style>
  article > footer {
    @apply mt-4 mb-16 text-xs;
  }
</style>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<article>
  <h1><a href="/posts/{slug}">{title}</a></h1>
  <slot />
  <footer>
    {#if date}<time>{date}</time>{/if}
  </footer>
</article>
