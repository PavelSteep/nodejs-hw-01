import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended.js";



/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  eslintPluginPrettier,
  {
    languageOptions: {
      files: ['src/**/*.js'],
      languageOptions: { globals: globals.node },
    },
    rules: {
      semi: "error",
      "no-unused-vars": ["error", { args: "none" }],
      "no-undef": "error",
    },
  },
];
