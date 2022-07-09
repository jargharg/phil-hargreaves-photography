module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
    '@nuxtjs/eslint-config-typescript',
  ],
  plugins: [
    'vue',
    '@typescript-eslint',
    'sort-class-members',
  ],
  rules: {
    'vue/multi-word-component-names': 1,
    'no-unused-vars': 1,
    'comma-dangle': [1, 'always-multiline'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'sort-class-members/sort-class-members': [
      2,
      {
        order: ['constructor', '[getters]', '[methods]'],
        groups: {
          getters: [{ kind: 'get', type: 'method', sort: 'alphabetical' }],
          methods: [{ type: 'method', sort: 'alphabetical' }],
        },
      },
    ],
  },
}
