<main>
  <slot />
</main>

<style>
  :root {
    font-family: Source Serif Pro, Georgia, Times New Roman, Times, serif;
    font-weight: 400;

    font-size: 1rem;
    line-height: 1.25em;
  }

  main {
    margin: auto;
    max-width: 80vw;
    margin-bottom: 6em;
  }

  @media screen and (min-width: 800px) {
    main {
      width: 800px;
    }
  }

  :global(p, h1, time) {
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }

  :global(p) {
    text-align: justify;
  }

  :global(a) {
    color: black;
    text-decoration: underline;
  }

  :global(h1) {
    font-family: Exo, Source Serif Pro, Georgia, Times New Roman, Times, serif;
    font-weight: 700;
    font-size: 1.5em;
  }

  :global(h1 > a) {
    text-decoration: none;
  }

  :global(time) {
    font-size: 0.8em;
  }

  :global(blockquote) {
    margin-right: auto;
    margin-left: -1em;
    padding-left: 0.65em;
    border-left: 0.35em solid;
  }

  :global(img) {
    height: auto;
    width: 100%;
    max-width: 800px;
    margin-top: 0em;
    margin-bottom: 0em;
  }
</style>
