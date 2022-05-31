# eslint-config-transloadit

Transloadit eslint rules

[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb), with a dash of [standard](https://github.com/standard/standard) and a pinch of [transloadit](https://github.com/transloadit) 🤏

## Installing

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-transloadit@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev eslint-config-transloadit
  ```

  If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.

2. `npm install --save-dev eslint-config-transloadit`

3. Add `"extends": "transloadit"` to your `.eslintrc`

See also [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

## Version 2

### Newly enforced rules

When upgrading to v2, these can be overridden and set to `warn` in consuming projects at first:

- [Rule of Hooks](https://github.com/airbnb/javascript/blob/1eadb93e377da1e56c3f91f26610e5d0a00738a9/packages/eslint-config-airbnb/rules/react-hooks.js) https://reactjs.org/docs/hooks-rules.html
- `no-unreachable-loop`
- `max-classes-per-file` is set to 1 (from airbnb)
- `one-var` (from airbnb)
- `no-underscore-dangle` (from airbnb)
- `comma-dangle` now also enforces: `"functions: 'always-multiline'"` (from airbnb)
- `operator-linebreak` is now `none` (from airbnb), meaning there can be no linebreak before or after `=`

### No longer enforced rules
`off`/`warn`-overrides for these inside consuming projects can be deleted:
- `react/jsx-one-expression-per-line`
- `no-await-in-loop`

See also https://github.com/transloadit/eslint-config-transloadit/pull/12/commits/2200e5f227dcc3893d5d81a80ca35e546c43bc06

## Version 3 (unreleased)

### Breaking changes

- `@babel/eslint-parser` is no longer the default. If you are using syntax
  that's not supported by the default parser of the ESLint version you are
  using, you need to add `parser: '@babel/eslint-parser'` to your `.eslintrc.js`
  and adjust the [`parserOptions`](https://eslint.org/docs/user-guide/configuring/language-options#specifying-parser-options)
  property. You probably also want to add `@babel/eslint-plugin` to the list of plugins.

## Releasing

- `npm i -g np`
- `np`
