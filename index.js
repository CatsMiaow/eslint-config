// https://eslint.org/docs/developer-guide/shareable-configs
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: '.',
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'sonarjs', 'jest'],
  extends: [
    'eslint:recommended',
    'airbnb-typescript/base',
    'plugin:jest/recommended',
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    'class-methods-use-this': 'off',
    // https://github.com/typescript-eslint/typescript-eslint/issues/1277
    'consistent-return': 'off',
    'func-names': 'off',
    'max-len': ['error', { code: 140, ignoreTemplateLiterals: true }],
    'newline-per-chained-call': 'off',
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

    // Change eslint rule to @typescript-eslint rule
    'lines-between-class-members': 'off',
    'no-return-await': 'off',

    // https://github.com/benmosher/eslint-plugin-import/issues/1453
    'import/no-cycle': 'off',
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',

    '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'angle-bracket' }],
    // https://github.com/typescript-eslint/typescript-eslint/issues/977
    // '@typescript-eslint/lines-between-class-members': ['error'],
    '@typescript-eslint/member-ordering': 'error',
    // https://github.com/typescript-eslint/typescript-eslint/issues/2077#issuecomment-633217768
    // https://github.com/iamturns/eslint-config-airbnb-typescript/issues/95
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/naming-convention': ['error',
      { 'selector': 'default', 'format': ['strictCamelCase'] },
      { 'selector': 'variable', 'format': ['camelCase', 'UPPER_CASE'] },
      { 'selector': 'property', 'format': null, 'leadingUnderscore': 'allow' },
      { 'selector': 'typeLike', 'format': ['StrictPascalCase'] },
      { 'selector': 'enumMember', 'format': ['UPPER_CASE'] }],
    '@typescript-eslint/no-floating-promises': ['error', { ignoreIIFE: true, ignoreVoid: true }],
    // https://github.com/typescript-eslint/typescript-eslint/issues/902
    '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true, ignoreProperties: true }],
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/prefer-includes': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/typedef': 'error',

    'sonarjs/no-duplicate-string': 'off'
  },
};
