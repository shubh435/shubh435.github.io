import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  {
    ignores: ['**/dist/**', '**/build/**', '**/node_modules/**'],
  },

  js.configs.recommended,
  tseslint.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  reactHooks.configs.flat.recommended,

  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      // Suppress warning when react-hooks detects a mismatched React version (e.g. with TanStack)
      'react-hooks/incompatible-library': 'off',

      // Error on variables/imports that are declared but never used; prefix with _ to opt-out
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'none',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      // Prefer `for...of` loops over index-based `for` loops when index is unused
      '@typescript-eslint/prefer-for-of': 'error',

      // Prefer a function type `() => void` over a single-call-signature interface
      '@typescript-eslint/prefer-function-type': 'error',

      // ─── General ESLint ───────────────────────────────────────────────────────

      // Require arrow function bodies to be concise expressions when possible (no unnecessary braces)
      // 'arrow-body-style': 'error',

      // Enforce camelCase naming for variables and properties
      camelcase: 'error',

      // Do not limit cyclomatic complexity of functions
      complexity: 'off',

      // Warn when files do not end with a newline (POSIX standard)
      'eol-last': 'warn',

      // Require `===` and `!==` instead of `==` / `!=`; "smart" allows null comparisons
      eqeqeq: ['error', 'smart'],

      // Require a `hasOwnProperty` guard inside `for...in` loops to skip inherited properties
      'guard-for-in': 'error',

      // Do not enforce a specific line-ending style (LF vs CRLF)
      'linebreak-style': 'off',

      // Warn when calling a constructor without parentheses (e.g. `new Foo` → `new Foo()`)
      'new-parens': 'warn',

      // Warn when a method chain exceeds 3 calls without a newline between each call
      'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 3 }],

      // Warn on bitwise operators (&, |, ^, ~) — often a typo for logical operators
      'no-bitwise': 'warn',

      // Disallow `arguments.caller` and `arguments.callee` (deprecated and forbidden in strict mode)
      'no-caller': 'error',

      // Disallow assignments inside conditions (e.g. `if (x = foo())`) to avoid accidental bugs
      'no-cond-assign': 'error',

      // Warn on arrow functions that could be confused with comparisons (e.g. `var x = a => 1 ? 2 : 3`)
      'no-confusing-arrow': 'warn',

      // Disallow console methods except a safe allowlist for intentional logging
      'no-console': [
        'error',
        {
          allow: ['warn', 'error'],
        },
      ],

      // Disallow `debugger` statements — should never reach production code
      'no-debugger': 'error',

      // Allow empty block statements (e.g. intentional no-op catch blocks)
      'no-empty': 'off',

      // Disallow `eval()` — it is a security risk and hinders optimisation
      'no-eval': 'error',

      // Allow extra semicolons (handled by formatter)
      'no-extra-semi': 'off',

      // Disallow switch cases that fall through to the next case without a break/return
      'no-fallthrough': ['error'],

      // Warn on more than one blank consecutive line (keeps files tidy)
      'no-multiple-empty-lines': 'warn',

      // Warn on trailing whitespace at the end of lines
      'no-trailing-spaces': 'warn',

      // Disallow `let x = undefined;` — just use `let x;`
      'no-undef-init': 'error',

      // Disallow control-flow statements inside `finally` blocks (can swallow exceptions)
      'no-unsafe-finally': 'error',

      // Disallow expressions that have no effect and are not assignments (e.g. `a && b;`)
      'no-unused-expressions': 'error',

      // Disallow labelled statements that are never used
      'no-unused-labels': 'error',

      // Require shorthand syntax for object methods and properties (`{ fn() {} }` over `{ fn: function() {} }`)
      'object-shorthand': 'error',

      // Require the radix argument in `parseInt()` to avoid accidental octal/hex parsing
      radix: 'error',

      // Do not enforce a space before function parentheses
      'space-before-function-paren': 'off',

      // Require a space after `//` or `/*` in comments; `/` marker allows triple-slash directives
      'spaced-comment': ['error', 'always', { markers: ['/'] }],

      // Require `Number.isNaN()` instead of comparing against `NaN` (NaN !== NaN)
      'use-isnan': 'error',

      // Do not enforce that `typeof` comparisons use valid string literals (handled by TS)
      'valid-typeof': 'off',
    },
  },

  // ─── Override: Angular-style component files ──────────────────────────────
  {
    rules: {
      // Disallow using a class before it is defined, but allow forward-referencing other classes
      '@typescript-eslint/no-use-before-define': ['error', { classes: false }],
    },
  }
);
