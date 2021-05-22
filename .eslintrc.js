module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.js', '*.ts'],
      env: {node: true},
      extends: ['eslint:all', 'plugin:import/errors', 'plugin:import/warnings'],
      parserOptions: {
        ecmaVersion: 2020,
        impliedStrict: true,
        sourceType: 'module'
      },
      rules: {
        // js & ts (as of eslint@7.26.0)
        'array-bracket-newline': ['error', 'consistent'],
        'array-element-newline': ['error', 'consistent'],
        'dot-location': ['error', 'property'],
        'func-names': ['error', 'as-needed'],
        'function-call-argument-newline': ['error', 'consistent'],
        indent: ['error', 2],
        'max-len': ['error', 140],
        'object-property-newline': ['error', {allowAllPropertiesOnSameLine: true}],
        'one-var': ['error', {initialized: 'never', uninitialized: 'consecutive'}],
        'padded-blocks': ['error', 'never'],
        'quote-props': ['error', 'as-needed'],
        quotes: ['error', 'single', {allowTemplateLiterals: true, avoidEscape: true}],
        // disable
        'capitalized-comments': 'off',
        'line-comment-position': 'off',
        'multiline-comment-style': 'off',
        'no-console': 'off',
        'no-inline-comments': 'off',
        'no-magic-numbers': 'off',
        'sort-imports': 'warn',
        'sort-keys': 'off'
      }
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['tsconfig.json', 'e2e/tsconfig.json'],
        createDefaultProgram: true
      },
      env: {browser: true, es6: true, node: true, jasmine: true, jest: true},
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/all',
        'plugin:@angular-eslint/all',
        'plugin:@angular-eslint/template/process-inline-templates'
      ],
      rules: {
        'new-cap': 'off',
        // ts (as of @typescript-eslint/eslint-plugin@4.23.0 and @angular-eslint/eslint-plugin@12.0.0)
        '@typescript-eslint/indent': ['error', 2],
        '@typescript-eslint/quotes': ['error', 'single', {allowTemplateLiterals: true, avoidEscape: true}],
        '@typescript-eslint/brace-style': ['error', '1tbs', {allowSingleLine: true}],
        //
        '@angular-eslint/prefer-on-push-component-change-detection': 'off',
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/no-unused-vars': 'off'
      }
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/all'],
      rules: {
        // html (as of @angular-eslint/eslint-plugin@12.0.0)
        '@angular-eslint/template/i18n': 'warn'
      }
    }
  ]
};
