import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: [
      // Pure generated data — nothing here is worth linting.
      'node_modules/**', '_site/**', 'vendor/**',
    ],
  },
];
