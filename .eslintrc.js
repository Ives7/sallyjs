module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
    "prettier/prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-inferrable-types": 0,
    "spaced-comment": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/ban-ts-comment": 0,
  },
}
