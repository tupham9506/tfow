module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "semi": [2, "always"],
    "unicorn/prefer-includes": "off", // Use include insted indexOf
    // "no-console": ["warn", { "allow": ["warn", "error"] }],
    "vue/html-self-closing": "off",
    quotes: [0, "single", { "allowTemplateLiterals": true }]
  }
}
