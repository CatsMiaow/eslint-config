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
    "airbnb-typescript/base",
    "plugin:jest/recommended",
    "plugin:unicorn/recommended",
    "plugin:sonarjs/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    "class-methods-use-this": "off",
    // https://github.com/typescript-eslint/typescript-eslint/issues/1277
    "consistent-return": "off",
    "func-names": "off",
    "max-len": ["error", { code: 140, ignoreTemplateLiterals: true }],
    "newline-per-chained-call": "off",
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

    // Change eslint rule to @typescript-eslint rule
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "no-dupe-class-members": "off",
    "no-duplicate-imports": "off",
    "no-loop-func": "off",
    "no-return-await": "off",
    "no-unused-expressions": "off",

    // https://github.com/benmosher/eslint-plugin-import/issues/1753
    "import/named": "off",
    // https://github.com/benmosher/eslint-plugin-import/issues/1453
    "import/no-cycle": "off",
    "import/no-default-export": "error",
    "import/order": ["error", { groups: [["builtin", "external", "internal"]], "newlines-between": "always", alphabetize: { order: "asc", caseInsensitive: true } }],
    "import/prefer-default-export": "off",

    "@typescript-eslint/consistent-indexed-object-style": "error",
    "@typescript-eslint/consistent-type-assertions": ["error", { assertionStyle: "angle-bracket" }],
    "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/explicit-member-accessibility": ["error", { overrides: { constructors: "no-public" } }],
    // https://github.com/typescript-eslint/typescript-eslint/issues/977
    "@typescript-eslint/lines-between-class-members": "off",
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/naming-convention": ["error",
      { selector: "default", format: ["camelCase"] },
      { selector: "variable", format: ["camelCase", "UPPER_CASE"] },
      // https://github.com/microsoft/TypeScript/issues/9458
      // https://github.com/typescript-eslint/typescript-eslint/issues/1510
      { selector: "parameter", format: ["strictCamelCase"], leadingUnderscore: "allow" },
      { selector: "property", format: null, leadingUnderscore: "allow" },
      { selector: "typeLike", format: ["StrictPascalCase"] },
      { selector: "enumMember", format: ["UPPER_CASE"] }],

    "@typescript-eslint/no-dupe-class-members": "error",
    "@typescript-eslint/no-duplicate-imports": "error",
    "@typescript-eslint/no-floating-promises": ["error", { ignoreIIFE: true, ignoreVoid: true }],
    "@typescript-eslint/no-inferrable-types": ["error", { ignoreParameters: true, ignoreProperties: true }],
    "@typescript-eslint/no-loop-func": "error",
    "@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: false }],
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/prefer-includes": "off",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/return-await": "error",
    "@typescript-eslint/typedef": ["error", { arrowParameter: true, memberVariableDeclaration: true, parameter: true, propertyDeclaration: true }],
    "@typescript-eslint/unbound-method": ["error", { ignoreStatic: true }],

    "sonarjs/no-duplicate-string": "off",

    "unicorn/import-style": "off",
    "unicorn/no-fn-reference-in-iterator": "off",
    "unicorn/no-null": "off",
    "unicorn/no-unreadable-array-destructuring": "off",
    "unicorn/prevent-abbreviations": "off",
  },
};
