<script>
  export let title
  export let date

  const { format } = new Intl.DateTimeFormat()

  $: date = {
    iso: date,
    pretty: format(new Date(date)),
  }
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
  <h1><a href="/posts/{title}">{title}</a></h1>
  <slot />
  <footer>
    {#if date}<time datetime={date.iso}>{date.pretty}</time>{/if}
  </footer>
</article>
