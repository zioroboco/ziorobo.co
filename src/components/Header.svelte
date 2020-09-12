<style>
  header {
    padding-top: 2em;
    display: flex;
    align-items: center;
    @apply text-5xl;
  }

  header > * {
    margin: 0;
  }

  .avatar {
    display: inherit;
    align-items: inherit;
  }

  .avatar > img {
    width: 1em;
  }

  .avatar > span {
    position: absolute;
    margin-bottom: 0.165em;
    margin-left: 1.5em;
    font-family: Montserrat Alternates, Helvetica, Arial, sans-serif;
  }

  .github {
    margin-bottom: 0.1em;
    width: 0.75em;
    margin-left: auto;
  }
</style>

<header>
  <a class="avatar" href="/">
    <img alt="avatar" src="favicon.png" />
    <span>ziorobo.co</span>
  </a>
  <a class="github" href="https://github.com/zioroboco">
    <img alt="github logo" src="github.svg" />
  </a>
</header>
