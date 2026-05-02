import js from "@eslint/js";
<<<<<<< HEAD
=======
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
>>>>>>> 19c33f3c2723ce9066763c84e3ed774b6b7e4d95
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
<<<<<<< HEAD
  { ignores: ["dist"] },
=======
  { ignores: ["dist", ".output", ".vinxi"] },
>>>>>>> 19c33f3c2723ce9066763c84e3ed774b6b7e4d95
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
<<<<<<< HEAD
=======
  eslintPluginPrettier,
>>>>>>> 19c33f3c2723ce9066763c84e3ed774b6b7e4d95
);
