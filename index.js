module.exports = {
  extends: 'airbnb',
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  plugins: [
    'node',
    'promise',
    'react',
    'prefer-import',
    '@babel/eslint-plugin',
    'jest',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Include rules from standard that are not in airbnb:
    // https://github.com/transloadit/node-sdk/issues/90
    ////////////////////////////////////////////////////////////
    'accessor-pairs': ['error', { setWithoutGet: true, enforceForClassMembers: true }],
    'default-case-last': 'error',
    'no-extra-parens': ['error', 'functions'],
    'no-import-assign': 'error',
    'no-loss-of-precision': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable-loop': 'warn',
    'no-useless-backreference': 'error',
    'no-useless-call': 'error',
    'node/handle-callback-err': ['error', '^(err|error)$'],
    'node/no-callback-literal': 'error',
    'node/no-deprecated-api': 'error',
    'node/no-exports-assign': 'error',
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',
    'node/process-exit-as-throw': 'error',
    'prefer-regex-literals': ['warn', { disallowRedundantWrapping: true }],
    'promise/param-names': 'error',

    // Selectively override certain airbnb rules from standard:
    ////////////////////////////////////////////////////////////
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'space-before-function-paren': ['error', 'always'],
    semi: ['error', 'never'],

    // Override/disable certain airbnb rules:
    ////////////////////////////////////////////////////////////
    'max-classes-per-file': 0,
    'max-len': 0,
    'no-plusplus': 0,
    'one-var': 0,
    'no-underscore-dangle': [
      'error', {
        allow: [],
        allowAfterThis: true,
        allowAfterSuper: true,
        enforceInMethodNames: false,
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    // rules imported from the api repo:
    ////////////////////////////////////////////////////////////
    'strict': ['error', 'global'],
    "array-callback-return": "warn",
    'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],

    // rules imported from the content repo:
    ////////////////////////////////////////////////////////////
    'key-spacing': [
      'error',
      {
        multiLine: {
          beforeColon: false,
          afterColon: true,
        },
        align: {
          beforeColon: false,
          afterColon: true,
          on: 'colon',
          mode: 'strict',
        },
      },
    ],
    'max-len': [
      'warn',
      {
        code: 125,
        comments: 125,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],

    // It's true that we'd generally like to use object.property, but this.state.formState is usually better read when we read this.state.formState['property'].
    'dot-notation': 0,
    camelcase: 0,
    'no-console': 0,
    'no-fallthrough': 0,
    'no-multi-spaces': 0,
    'no-multi-str': 0,
    'no-template-curly-in-string': 0,
    'no-useless-escape': 0,
    'node/no-path-concat': 0,
    'prefer-import/prefer-import-over-require': 0,
    'react/no-unused-prop-types': 'error',
    'react/prop-types': 0,
    'react/require-render-return': 0,

    // rules i disagree with or had problems with
    ////////////////////////////////////////////////////////////
    'no-underscore-dangle': 0, // <-- not sure what is the benefit, and many fails
    'no-continue': 0, // <-- continue allows for 'early exits' vs deep nesting which reduces cognitive load
    'arrow-body-style': 0, // <-- allowing structure sometimes can make code more readable for a single long line imho
    'no-cond-assign': 0, // <-- can be useful with if ((m = x.match())) { // handle matches }
    'react/jsx-closing-tag-location': 0, // <-- autofix conflicts with react/jsx-indent, causing ugly code fix in e.g. langEn.js
    'semi-style': 0, // <-- i think `;(async ()` is an okay pattern, and its autofix conflicted with import/newline-after-import
    'arrow-parens': 0, // <-- js already complains if you don't add parens when you must. adding these seems superfluous to me, like adding semicolons when you don't have to, and a linter/parse error has your back
    'operator-linebreak': ['error', 'before'], // <-- easier to see if it is before, to me
    'newline-per-chained-call': 0, // <-- 3 are allowed, but then autofix introduces a cut-off for the fourth. it's weird. let's leave this up to the dev
    "react/display-name": 0, // <-- autofix sprinkles parse errors in our code like /home/kvz/code/content/_assets/javascripts/langEn.js: Unexpected token, expected "," (52:51)
    "react/jsx-filename-extension": 0, // <-- we're super heavy users of jsx in .js

    // rules i can see the value of but don't want to fail on right now
    ////////////////////////////////////////////////////////////
    'import/extensions': ['warn'],
    'no-alert': ['warn'],
    'no-restricted-properties': ['warn'],
    'default-case': ['warn'],
  },
};
