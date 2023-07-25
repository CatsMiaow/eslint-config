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

`.eslintrc`

```json
{
  "extends": "@catsmiaow/eslint-config",
  "rules": {}
}
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
  "trailingComma": "es5",
  "bracketSpacing": true,
  "arrowParens": "always"
}
```
