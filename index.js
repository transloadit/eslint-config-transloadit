const config = require('./.eslintrc')

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    // eslint-disable-next-line global-require
    'no-useless-iife': require('./rules/no-useless-iife'),
  },
}
