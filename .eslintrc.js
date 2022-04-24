module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'plugin:json/recommended',
        '@vue/standard',
        '@vue/typescript/recommended',
        'eslint:recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        '@typescript-eslint/ban-types': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'array-bracket-spacing': 0,
        'comma-spacing': ['error', { before: false, after: true } ],
        'comma-dangle': [
            'error',
            'never'
        ],
        indent: [2, "tab"],
        'no-tabs': 0,
        'no-extra-semi': 'error',
        quotes: [
            'error',
            'single'
        ],
        'vue/no-unused-vars': 'error',
        'vue/html-indent': ["error", "tab"],
        'vue/singleline-html-element-content-newline': ['error', {
            ignoreWhenNoAttributes: true,
            ignoreWhenEmpty: true,
            ignores: ['pre', 'textarea' ]
        } ],
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'never'
            }
        ],
        'vue/v-bind-style':
        [
            'error',
            'shorthand'
        ],
        'vue/v-on-style': [
            'error',
            'shorthand'
        ],
        'vue/max-attributes-per-line': ['error', {
            singleline: 1,
            multiline: {
                max: 1,
                allowFirstLine: false
            }
        }],
        'prefer-promise-reject-errors': 'off'
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
}
