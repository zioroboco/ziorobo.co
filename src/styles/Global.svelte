<style global>
  body {
    @apply mx-auto;
    max-width: 80vw;

    @media (min-width: 800px) {
      @apply max-w-lg;
    }

    @apply text-base;
    font-family: Yrsa, Georgia, Times New Roman, Times, serif;
    line-height: 1.5em;
  }

  p {
    @apply my-4;
    & > a {
      text-decoration: underline;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply my-6;
    font-family: Exo, Yrsa, Georgia, Times New Roman, Times, serif;
  }

  h1 {
    @apply text-xl;
  }

  h2 {
    @apply text-lg;
  }

  img {
    @apply my-6;
  }

  time {
    @apply text-sm;
  }

  blockquote {
    margin-left: -1rem;
    padding-left: 0.65rem;
    border-left: 0.35rem solid;
  }
</style>
