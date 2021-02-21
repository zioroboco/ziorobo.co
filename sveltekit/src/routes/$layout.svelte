<main>
  <slot />
</main>

<style global>
  :root {
    font-size: 1.5rem;
    line-height: 1.25em;
    font-family: Yrsa, Georgia, Times New Roman, Times, serif;
  }

  @media screen and (min-width: 800px) {
    main {
      width: 800px;
    }
  }

  main {
    margin: auto;
    max-width: 80vw;

    padding-bottom: 4em;
  }

  p {
    text-align: justify;
  }

  a {
    color: black;
    text-decoration: underline;
  }

  h1 {
    font-size: 1.5em;
    font-family: Exo, Yrsa, Georgia, Times New Roman, Times, serif;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  h1 > a {
    text-decoration: none;
  }

  time {
    font-size: 0.8em;
  }

  blockquote {
    margin-right: auto;
    margin-left: -1em;
    padding-left: 0.65em;
    border-left: 0.35em solid;
  }

  img {
    height: auto;
    width: 100%;
    max-width: 800px;
    margin-top: 1em;
    margin-bottom: 1em;
  }
</style>
