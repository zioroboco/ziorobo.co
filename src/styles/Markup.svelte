<style global>
  html {
    font-size: 20px;
  }

  body {
    @apply mx-auto;
    max-width: 80vw;

    @media (min-width: 800px) {
      @apply max-w-lg;
    }

    font-family: Source Serif Pro, Georgia, Times New Roman, Times, serif;
    font-weight: 400;
    line-height: 1.5em;
  }

  p {
    @apply my-4 text-justify;
  }

  a {
    text-decoration: underline;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply my-6;
    font-family: Exo, Source Serif Pro, Georgia, Times New Roman, Times, serif;
    font-weight: 700;
    & > a {
      text-decoration: none;
    }
  }

  h1 {
    @apply text-2xl;
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

  ul {
    @apply ml-8 list-disc;
    & a {
      text-decoration: underline;
    }
  }

  hr {
    @apply my-6;
  }
</style>
