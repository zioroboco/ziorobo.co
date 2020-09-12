<script>
  export let title
  export let date
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<article>
  <h1><a href="/posts/{title}">{title}</a></h1>
  <slot />
  {#if date}
    <br />
    <time
      datetime={date}>{new Intl.DateTimeFormat().format(new Date(date))}</time>
  {/if}
</article>
