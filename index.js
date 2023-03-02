const config = require('./.eslintrc')

module.exports = {
  configs: {
    config,
  },
  rules: {
    // eslint-disable-next-line global-require
    'no-useless-iife': require('./rules/no-useless-iife'),
  },
}
