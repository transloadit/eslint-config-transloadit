const { RuleTester } = require('eslint')
const rule = require('../rules/no-useless-iife')

new RuleTester({
  parserOptions: { ecmaVersion: 2021 },
}).run('no-useless-iife', rule, {
  valid: [
    'const noop = () => {}',
    'const noop = (() => {})',
    'new Promise(() => {})',
    'someFunction(() => {})',
    `(() => {
        oneInstruction
        anotherInstruction
      })()`,
    `(() => {
        if (condition) 
          someInstruction
      })()`,
    `(() => {
        try {
          someInstruction
        } catch {}
      })()`,
    `(() => {
        while(true);
      })()`,
    `(() => {
        for(;;) { someInstruction }
      })()`,
  ],
  invalid: [
    {
      code  : '(async () => { await promise })()',
      errors: [{ message: /IIFE/ }],
    },
    {
      code: `(() => {
        oneInstruction
        // a comment
      })()`,
      errors: [{ message: /IIFE/ }],
    },
    {
      code  : '(async () => { await promise })().catch(console.error)',
      errors: [{ message: /IIFE/ }],
    },
    {
      code  : '(async () => {})().catch(console.error)',
      errors: [{ message: /IIFE/ }],
    },
    {
      code  : '(() => {})()',
      errors: [{ message: /IIFE/ }],
    },
  ],
})
