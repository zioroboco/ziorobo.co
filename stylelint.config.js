module.exports = {
  extends: ["stylelint-config-recommended"],
  ignoreFiles: ["**/*.svx", "**/*.cjs"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "screen"],
      },
    ],
  },
}
