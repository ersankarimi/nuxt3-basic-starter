import antfu from "@antfu/eslint-config";

export default antfu({
  formatters: true,
  vue: true,
  stylistic: {
    indent: 2,
    quotes: "double",
    semi: true,
  },
  ignores: [
    "**/node_modules",
    "**/.nuxt",
    "**/.dist",
    "**/package-lock.yaml",
  ],
  rules: {
    "no-console": "warn",
  },
});
