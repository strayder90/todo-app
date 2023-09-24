module.exports = {
  root: true,
  plugins: ["react", "react-refresh", "jsx-a11y"],
  extends: [
    "plugin:jsx-a11y/recommended",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  env: {
    browser: true,
    jasmine: true,
    es6: true,
    node: true,
    commonjs: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@components", "./src/components"],
          ["@assets", "./src/assets"],
        ],
        extensions: [".js", ".jsx", ".json", ".graphql"],
      },
      node: {
        extensions: [".js", ".jsx", ".json"],
        paths: ["src", "local_node_modules"],
      },
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    "no-console": "error",
    "import/named": "warn",
    "import/namespace": "warn",
    "import/default": "warn",
    "import/export": "warn",
    "import/order": [
      "error",
      {
        groups: [["builtin", "external"], "internal", ["parent", "sibling"], "index"],
        "newlines-between": "always",
      },
    ],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: ["return", "for", "function", "if", "while", "class", "switch", "try"],
      },
    ],
    "react/react-in-jsx-scope": "error",
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "react/jsx-uses-vars": ["error"],
    "react/jsx-uses-react": "error",
    "react/jsx-fragments": "warn",
    "react/no-danger": "error",
    "react/prefer-es6-class": "error",
    "react/prop-types": "warn",
    "react/display-name": "warn",
    "jsx-quotes": ["warn", "prefer-double"],
    "comma-dangle": [
      "warn",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "only-multiline",
        functions: "never",
      },
    ],
    "comma-style": ["warn", "last"],
    semi: ["warn", "always"],
    "eol-last": ["warn", "always"],
    "semi-style": ["warn", "last"],
    "no-extra-semi": "warn",
    "no-debugger": "warn",
    "no-trailing-spaces": "warn",
    quotes: ["warn", "double", { avoidEscape: true }],
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
};
