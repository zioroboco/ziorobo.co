<script>
  export let segment
</script>

<nav>
  <ul>
    <li>
      <a
        aria-current={segment === undefined ? 'page' : undefined}
        href=".">home</a>
    </li>
    <li>
      <a
        aria-current={segment === 'more' ? 'page' : undefined}
        href="more">more</a>
    </li>
    <li>
      <a
        aria-current={segment === '404' ? 'page' : undefined}
        href="404">404</a>
    </li>
  </ul>
</nav>
