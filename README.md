# @CatsMiaow/eslint-config

Shared ESLint configurations for TypeScript projects

## Configuration

`Installing a package` on [Working with the npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package)

## Install

`tsconfig.json` required

```sh
npm i -D @catsmiaow/eslint-config eslint vitest prettier
```

## Usage

`eslint.config.mjs`

```ts
import { defineConfig } from 'eslint/config';
import sharedConfig from '@catsmiaow/eslint-config';

export default defineConfig([
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/vitest.config.ts'],
  },
  {
    extends: [sharedConfig],
    rules: {},
  },
  {
    files: ['**/test/**/*'],
    rules: {
      'no-console': 'off',
    },
  },
]);
```

`.prettierrc`

```json
{
  "printWidth": 140,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "trailingComma": "all",
  "bracketSpacing": true,
  "arrowParens": "always"
}
```
