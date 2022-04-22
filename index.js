/* eslint-disable spaced-comment,key-spacing,quote-props */
module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  plugins: [
    '@babel/eslint-plugin',
    'jest',
    'node',
    'promise',
    'react',
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
    'default-case-last': ['error'],
    'no-extra-parens': ['error', 'functions'],
    'no-import-assign': ['error'],
    'no-loss-of-precision': ['error'],
    'no-unmodified-loop-condition': ['error'],
    'no-unreachable-loop': ['error'],
    'no-useless-backreference': ['error'],
    'no-useless-call': ['error'],
    'node/handle-callback-err': ['error', '^(err|error)$'],
    'node/no-callback-literal': ['error'],
    'node/no-deprecated-api': ['error'],
    'node/no-exports-assign': ['error'],
    'node/no-new-require': ['error'],
    'node/process-exit-as-throw': ['error'],
    'prefer-regex-literals': ['warn', { disallowRedundantWrapping: true }],
    'promise/param-names': ['error'],

    // Selectively override certain airbnb rules from standard:
    ////////////////////////////////////////////////////////////
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'space-before-function-paren': ['error', 'always'],
    'semi': ['error', 'never'],

    // Override/disable certain airbnb rules:
    ////////////////////////////////////////////////////////////
    'no-plusplus': ['off'],
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
    'quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],

    // Evgenia: It's true that we'd generally like to use object.property,
    // but this.state.formState is usually better read when we read
    // this.state.formState['property'].
    'camelcase': ['off'],
    'dot-notation': ['off'],
    'no-multi-spaces': ['off'],
    'no-multi-str': ['off'],
    'node/no-path-concat': ['off'],
    'react/prop-types': ['off'],

    // perhaps enable in future release?
    'no-cond-assign': ['off'], // <-- can be useful with if ((m = x.match())) { // handle matches }
    'import/no-commonjs': ['off'],

    // rules i disagree with or had problems with
    ////////////////////////////////////////////////////////////
    'arrow-body-style': ['off'], // <-- allowing structure sometimes can make code more readable for a single long line imho
    'arrow-parens': ['off'], // <-- js already complains if you don't add parens when you must. adding these seems superfluous to me, like adding semicolons when you don't have to, and a linter/parse error has your back
    'newline-per-chained-call': ['off'], // <-- 3 are allowed, but then autofix introduces a cut-off for the fourth. it's weird. let's leave this up to the dev
    'no-continue': ['off'], // <-- continue allows for 'early exits' vs deep nesting which reduces cognitive load
    'react/display-name': ['off'], // <-- autofix sprinkles parse errors in our code like /home/kvz/code/content/_assets/javascripts/langEn.js: Unexpected token, expected ',' (52:51)
    'react/jsx-filename-extension': ['off'], // <-- we're super heavy users of jsx in .js
    'semi-style': ['off'], // <-- i think `;(async ()` is an okay pattern, and its autofix conflicted with import/newline-after-import
    'react/jsx-one-expression-per-line': ['off'], // <-- This one is a bit annoying
    'no-await-in-loop': ['off'], // <-- Let's disable it and see if it bites us
    'no-underscore-dangle': ['off'], // We use _ in almost all repos. See discussion here: https://github.com/transloadit/botty/pull/41#discussion_r738022104
    'no-implicit-coercion': ['error'],
  },
}
