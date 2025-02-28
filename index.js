// https://eslint.org/docs/latest/extend/shareable-configs
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: '.',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'sonarjs', 'unicorn', '@vitest', 'prettier'],
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@vitest/legacy-recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended-legacy',
    'plugin:@typescript-eslint/all',
    'plugin:prettier/recommended',
  ],
  rules: {
    'class-methods-use-this': 'off',
    'func-names': 'off',
    'max-len': ['error', { code: 140, ignoreTemplateLiterals: true, ignoreUrls: true }],
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
    'spaced-comment': ['error', 'always', { line: { markers: ['/', '#region', '#endregion'] } }],

    'import/extensions': ['error', 'ignorePackages'],
    // https://github.com/benmosher/eslint-plugin-import/issues/1753
    'import/named': 'off',
    'import/no-default-export': 'error',
    'import/order': [
      'error',
      { groups: [['builtin', 'external', 'internal']], 'newlines-between': 'always', alphabetize: { order: 'asc', caseInsensitive: true } },
    ],
    'import/prefer-default-export': 'off',

    //#region typescript-eslint
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/all.ts
    '@typescript-eslint/class-methods-use-this': 'off',
    '@typescript-eslint/consistent-generic-constructors': ['error', 'type-annotation'],
    '@typescript-eslint/consistent-return': 'off',
    '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'angle-bracket' }],
    // https://github.com/typescript-eslint/typescript-eslint/issues/4268
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/explicit-member-accessibility': ['error', { overrides: { constructors: 'no-public' } }],
    '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
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
    '@typescript-eslint/no-extra-parens': ['error', 'functions'],
    '@typescript-eslint/no-floating-promises': ['error', { ignoreIIFE: true, ignoreVoid: true }],
    '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true, ignoreProperties: true }],
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/parameter-properties': 'off',
    // defaultOptionsRecommended https://typescript-eslint.io/rules/restrict-template-expressions/#options
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowAny: true, allowBoolean: true, allowNullish: true, allowNumber: true, allowRegExp: true },
    ],
    '@typescript-eslint/typedef': ['error', { memberVariableDeclaration: true, parameter: true, propertyDeclaration: true }],
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],

    '@typescript-eslint/init-declarations': 'off',
    // https://github.com/typescript-eslint/typescript-eslint/issues/7934
    '@typescript-eslint/max-params': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-implicit-any-catch': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    '@typescript-eslint/prefer-includes': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/prefer-readonly': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/sort-type-constituents': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
    //#endregion

    //#region sonarjs
    'sonarjs/no-duplicate-string': 'off',
    //#endregion

    //#region unicorn
    'unicorn/consistent-function-scoping': ['error', { checkArrowFunctions: false }],
    'unicorn/no-array-callback-reference': 'off',
    // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1947
    'unicorn/no-array-method-this-argument': 'off',
    'unicorn/no-array-reduce': ['error', { allowSimpleOperations: true }],
    'unicorn/no-null': 'off',
    'unicorn/no-unreadable-array-destructuring': 'off',
    'unicorn/numeric-separators-style': ['error', { onlyIfContainsSeparator: true }],
    'unicorn/prefer-prototype-methods': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/switch-case-braces': ['error', 'avoid'],
    //#endregion
  },
};
