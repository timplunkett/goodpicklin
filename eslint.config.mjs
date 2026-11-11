import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: [
      // Dependencies and build output -- nothing here is worth linting.
      'node_modules/**', '_site/**', 'vendor/**', '.jekyll-cache/**',
    ],
  },
  js.configs.recommended,
  {
    // Site JavaScript: plain scripts loaded with <script src>, run in the browser.
    files: ['assets/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: globals.browser,
    },
  },
  {
    // Tooling config files (this file).
    files: ['*.mjs'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.node,
    },
  },
];
