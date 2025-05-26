import js from "@eslint/js";
import globals from "globals";
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginReact from "eslint-plugin-react"; // Renamed for clarity
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist/**"] },
  js.configs.recommended,
  ...tseslint.configs.recommended, // Base TypeScript configurations. This applies to *.ts, *.tsx.
                                  // It should set up tseslint.parser and @typescript-eslint plugin.

  // Combined configuration for React, JSX-A11y, Hooks, and Refresh for TSX files
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "react": eslintPluginReact,
      "jsx-a11y": jsxA11y,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      // "@typescript-eslint": tseslint.plugin, // Already provided by tseslint.configs.recommended
    },
    languageOptions: {
      // parser: tseslint.parser, // Should be inherited from tseslint.configs.recommended
      // parserOptions for tseslint.parser should also be inherited. We add JSX feature.
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        // project: "./tsconfig.json" // Should be inherited if set in tseslint.configs.recommended
      },
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // Base rules from plugins
      ...(eslintPluginReact.configs.recommended?.rules || {}),
      ...(eslintPluginReact.configs['jsx-runtime']?.rules || {}), // For new JSX transform
      ...(jsxA11y.configs.recommended?.rules || {}),
      ...(reactHooks.configs.recommended?.rules || {}),

      // Project-specific rule configurations
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "warn", // Target change for this subtask
      
      // Other project-specific rules or overrides can go here
    },
  }
);
