import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import vitest from '@vitest/eslint-plugin';
import github from 'eslint-plugin-github';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import tseslint, { configs, plugin } from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  configs.all,
  github.getFlatConfigs().recommended,
  ...github.getFlatConfigs().typescript,
  stylistic.configs.recommended,
  prettierRecommended,
  unicorn.configs.recommended,
  sonarjs.configs.recommended,
  vitest.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@typescript-eslint': plugin,
      '@stylistic': stylistic,
      vitest,
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      complexity: ['error', 20],
      'class-methods-use-this': 'off',
      'eslint-comments/require-description': 'off',
      'func-names': 'off',
      'max-len': ['error', { code: 140, ignoreTemplateLiterals: true, ignoreUrls: true }],
      // Recommendations usually range from 100 to 500 lines.
      'max-lines': ['error', { max: 500, skipBlankLines: true, skipComments: true }],
      'newline-per-chained-call': 'off',
      'no-await-in-loop': 'off',
      'no-continue': 'off',
      // https://github.com/airbnb/javascript/issues/1342
      'no-param-reassign': ['error', { props: false }],
      // https://github.com/airbnb/javascript/issues/1271
      // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js#L334-L352
      'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
      'no-underscore-dangle': ['error', { allow: ['_id'] }],
      'no-void': ['error', { allowAsStatement: true }],
      'object-curly-newline': 'off',

      //#region import
      // https://github.com/benmosher/eslint-plugin-import/issues/1753
      'import/named': 'off',
      'import/no-default-export': 'error',
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external', 'internal']],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/prefer-default-export': 'off',
      //#endregion

      //#region typescript-eslint
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/all.ts
      '@typescript-eslint/consistent-generic-constructors': ['error', 'type-annotation'],
      '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'angle-bracket' }],
      '@typescript-eslint/explicit-member-accessibility': ['error', { overrides: { constructors: 'no-public' } }],
      '@typescript-eslint/method-signature-style': ['error', 'method'],
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'default', format: ['strictCamelCase'] },
        { selector: 'variable', format: ['strictCamelCase', 'UPPER_CASE', 'StrictPascalCase'] },
        // https://github.com/microsoft/TypeScript/issues/9458
        { selector: 'parameter', modifiers: ['unused'], format: ['strictCamelCase'], leadingUnderscore: 'allow' },
        { selector: 'property', format: null },
        { selector: 'typeProperty', format: null },
        { selector: 'typeLike', format: ['StrictPascalCase'] },
        { selector: 'enumMember', format: ['UPPER_CASE'] },
        { selector: 'import', modifiers: ['default'], format: ['strictCamelCase', 'StrictPascalCase'] },
      ],
      '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
      '@typescript-eslint/no-floating-promises': ['error', { ignoreIIFE: true, ignoreVoid: true }],
      '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true, ignoreProperties: true }],
      '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/only-throw-error': ['error', { allowThrowingUnknown: true }],
      // defaultOptionsRecommended https://typescript-eslint.io/rules/restrict-template-expressions/#options
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        { allowAny: true, allowBoolean: true, allowNullish: true, allowNumber: true, allowRegExp: true },
      ],
      '@typescript-eslint/typedef': ['error', { memberVariableDeclaration: true, parameter: true, propertyDeclaration: true }],
      '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],

      '@typescript-eslint/class-methods-use-this': 'off',
      '@typescript-eslint/consistent-return': 'off',
      // https://github.com/typescript-eslint/typescript-eslint/issues/4268
      '@typescript-eslint/consistent-type-imports': 'off',
      '@typescript-eslint/init-declarations': 'off',
      // https://github.com/typescript-eslint/typescript-eslint/issues/7934
      '@typescript-eslint/max-params': 'off',
      '@typescript-eslint/no-extraneous-class': 'off',
      '@typescript-eslint/no-implicit-any-catch': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/no-parameter-properties': 'off',
      '@typescript-eslint/no-type-alias': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-type-assertion': 'off',
      '@typescript-eslint/non-nullable-type-assertion-style': 'off',
      '@typescript-eslint/parameter-properties': 'off',
      '@typescript-eslint/prefer-destructuring': 'off',
      '@typescript-eslint/prefer-includes': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/prefer-readonly': 'off',
      '@typescript-eslint/prefer-readonly-parameter-types': 'off',
      '@typescript-eslint/sort-type-constituents': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
      //#endregion

      //#region stylistic
      '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
      '@stylistic/no-extra-parens': ['error', 'functions'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/spaced-comment': ['error', 'always', { line: { markers: ['/', '#region', '#endregion'] } }],
      //#endregion

      //#region sonarjs
      'sonarjs/cognitive-complexity': ['error', 20],
      'sonarjs/fixme-tag': 'off',
      'sonarjs/no-clear-text-protocols': 'off',
      // https://community.sonarsource.com/t/eslint-plugin-sonarjs-performance-issues-on-large-codebase/138392
      'sonarjs/no-commented-code': 'off',
      'sonarjs/slow-regex': 'off',
      'sonarjs/todo-tag': 'off',
      //#endregion

      //#region unicorn
      'unicorn/consistent-function-scoping': ['error', { checkArrowFunctions: false }],
      'unicorn/no-array-callback-reference': 'off',
      // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1947
      'unicorn/no-array-method-this-argument': 'off',
      'unicorn/no-array-reduce': ['error', { allowSimpleOperations: true }],
      'unicorn/no-null': 'off',
      'unicorn/no-unreadable-array-destructuring': 'off',
      'unicorn/number-literal-case': ['error', { hexadecimalValue: 'lowercase' }],
      'unicorn/numeric-separators-style': ['error', { onlyIfContainsSeparator: true }],
      'unicorn/prefer-prototype-methods': 'off',
      // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/2521
      'unicorn/prefer-spread': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/switch-case-braces': ['error', 'avoid'],
      //#endregion
    },
  }
);
