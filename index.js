// https://eslint.org/docs/developer-guide/shareable-configs
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: ".",
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "sonarjs", "unicorn", "jest"],
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:jest/recommended",
    "plugin:unicorn/recommended",
    "plugin:sonarjs/recommended",
    "plugin:@typescript-eslint/all",
  ],
  rules: {
    "class-methods-use-this": "off",
    // https://github.com/typescript-eslint/typescript-eslint/issues/1277
    "consistent-return": "off",
    "func-names": "off",
    "max-len": ["error", { code: 140, ignoreTemplateLiterals: true }],
    "newline-per-chained-call": "off",
    "no-await-in-loop": "off",
    "no-continue": "off",
    // https://github.com/airbnb/javascript/issues/1342
    "no-param-reassign": ["error", { props: false }],
    // https://github.com/airbnb/javascript/issues/1271
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js#L334-L352
    "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],
    "no-underscore-dangle": ["error", { allow: ["_id"] }],
    "no-void": ["error", { allowAsStatement: true }],
    "object-curly-newline": "off",
    "spaced-comment": ["error", "always", { line: { markers: ["/", "#region", "#endregion"] } }],

    // https://github.com/benmosher/eslint-plugin-import/issues/1753
    "import/named": "off",
    // https://github.com/benmosher/eslint-plugin-import/issues/1453
    "import/no-cycle": "off",
    "import/no-default-export": "error",
    "import/order": ["error", { groups: [["builtin", "external", "internal"]], "newlines-between": "always", alphabetize: { order: "asc", caseInsensitive: true } }],
    "import/prefer-default-export": "off",

    //#region typescript-eslint
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/all.ts
    "@typescript-eslint/consistent-type-assertions": ["error", { assertionStyle: "angle-bracket" }],
    "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
    "@typescript-eslint/explicit-member-accessibility": ["error", { overrides: { constructors: "no-public" } }],
    "@typescript-eslint/lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "@typescript-eslint/method-signature-style": ["error", "method"],
    "@typescript-eslint/naming-convention": ["error",
      { selector: "default", format: ["strictCamelCase"] },
      { selector: "variable", format: ["strictCamelCase", "UPPER_CASE", "StrictPascalCase"] },
      // https://github.com/microsoft/TypeScript/issues/9458
      { selector: "parameter", modifiers: ["unused"], format: ["strictCamelCase"], leadingUnderscore: "allow" },
      { selector: "property", format: null },
      { selector: "typeProperty", format: null },
      { selector: "typeLike", format: ["StrictPascalCase"] },
      { selector: "enumMember", format: ["UPPER_CASE"] }],
    "@typescript-eslint/no-confusing-void-expression": ["error", { ignoreArrowShorthand: true }],
    "@typescript-eslint/no-extra-parens": ["error", "functions"],
    "@typescript-eslint/no-floating-promises": ["error", { ignoreIIFE: true, ignoreVoid: true }],
    "@typescript-eslint/no-inferrable-types": ["error", { ignoreParameters: true, ignoreProperties: true }],
    "@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: false }],
    "@typescript-eslint/object-curly-spacing": ["error", "always"],
    "@typescript-eslint/typedef": ["error", { arrowParameter: true, memberVariableDeclaration: true, parameter: true, propertyDeclaration: true }],
    "@typescript-eslint/unbound-method": ["error", { ignoreStatic: true }],

    "@typescript-eslint/init-declarations": "off",
    "@typescript-eslint/no-extraneous-class": "off",
    "@typescript-eslint/no-implicit-any-catch": "off",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/non-nullable-type-assertion-style": "off",
    "@typescript-eslint/prefer-includes": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/prefer-readonly": "off",
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/sort-type-union-intersection-members": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    //#endregion

    //#region sonarjs
    "sonarjs/no-duplicate-string": "off",
    //#endregion

    //#region unicorn
    "unicorn/import-style": "off",
    "unicorn/no-array-callback-reference": "off",
    "unicorn/no-null": "off",
    "unicorn/no-unreadable-array-destructuring": "off",
    "unicorn/numeric-separators-style": ["error", { onlyIfContainsSeparator: true }],
    "unicorn/prefer-module": "off",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/prefer-prototype-methods": "off",
    "unicorn/prevent-abbreviations": "off",
    //#endregion
  },
};
