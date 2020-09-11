module.exports = {
  extends: ["stylelint-config-recommended"],
  ignoreFiles: ["**/*.svx"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "screen"],
      },
    ],
  },
}
