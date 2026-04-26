import astro from 'eslint-plugin-astro';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';
import astroParser from 'astro-eslint-parser';

export default tseslint.config(
  ...astro.configs['flat/recommended'],
  sonarjs.configs.recommended,
  unicorn.configs.recommended,
  ...tseslint.configs.recommended,

  {
    ignores: [".astro/**", "tailwind.config.mjs", "dist/**"],
  },

  {
    rules: {
      'no-extra-parens': ['error', 'all'],
      'indent': ['error', 2, { "SwitchCase": 1 }],
    },
  },

  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".astro"],
      },
    },
    rules: {
      'indent': ['error', 2],
      'unicorn/prevent-abbreviations': 'off',
    },
  },
);