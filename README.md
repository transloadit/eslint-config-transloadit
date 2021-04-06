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

## Releasing

- `npm i -g np`
- `np`
