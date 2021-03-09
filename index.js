module.exports = {
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
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
  ],
  parser: '@babel/eslint-parser',
  rules: {
    // Include rules from standard that are not in airbnb:
    // https://github.com/transloadit/node-sdk/issues/90
    'accessor-pairs': ['error', { setWithoutGet: true, enforceForClassMembers: true }],
    'default-case-last': 'error',
    'no-extra-parens': ['error', 'functions'],
    'no-import-assign': 'error',
    'no-loss-of-precision': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable-loop': 'error',
    'no-useless-backreference': 'error',
    'no-useless-call': 'error',
    'node/handle-callback-err': ['error', '^(err|error)$'],
    'node/no-callback-literal': 'error',
    'node/no-deprecated-api': 'error',
    'node/no-exports-assign': 'error',
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',
    'node/process-exit-as-throw': 'error',
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
    'promise/param-names': 'error',

    // Selectively override certain airbnb rules from standard:
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'space-before-function-paren': ['error', 'always'],
    semi: ['error', 'never'],

    // Override/disable certain airbnb rules:
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

    // transloadit custom rules:
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
    'no-multi-spaces': 0,
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
    // Primarily for the
    // ifSmth ?
    //   <div props props/> :
    //   <spam props props/>
    // syntax to look symmetrical.
    'operator-linebreak': ['error', 'after'],
    // Can't find a way to enable beautiful <>{(closeModal) => }</> indentation :-/
    // "indent": ["error", 2, {"FunctionExpression": { "body": 0 }}]

    // Because
    //   const ifReadOnly = this.props.credential ? true : false
    // may be easier to parse than
    //   const ifReadOnly = !!this.props.credential
    'no-unneeded-ternary': 'off',

    // It's true that we'd generally like to use object.property, but this.state.formState is usually better read when we read this.state.formState['property'].
    'dot-notation': 'off',
    camelcase: 'off',
    'no-console': 'off',
    'no-fallthrough': 'off',
    'no-multi-spaces': 'off',
    'no-multi-str': 'off',
    'no-template-curly-in-string': 'off',
    'no-useless-escape': 'off',
    'node/no-path-concat': 'off',
    'prefer-import/prefer-import-over-require': 'off',
    'react/display-name': 'off',
    'react/no-unused-prop-types': 'error',
    'react/prop-types': 'off',
    'react/require-render-return': 'off',
    // "no-unused-vars": "off",
  },
};
