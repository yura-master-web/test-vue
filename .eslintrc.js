const INLINE_ELEMENTS = require('eslint-plugin-vue/lib/utils/inline-non-void-elements.json')

module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    env: {
        node: true,
        es6: true,
        jest: true,
    },
    // extends: ['plugin:vue/essential', '@vue/airbnb'],
    extends: ['plugin:vue/recommended', 'eslint:recommended', 'prettier'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    globals: {
        axios: true,
        dump: true,
    },
    rules: {
        // 'no-restricted-globals': ['describe', 'beforeEach', 'it', 'expect'],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        semi: ['error', 'never'],
        'arrow-parens': [1, 'as-needed'],
        'arrow-spacing': ['warn', {before: true, after: true}],
        'object-curly-spacing': [1, 'never'],
        indent: [2, 4, {SwitchCase: 1}],
        'no-multiple-empty-lines': [2, {max: 2}],

        'vue/attributes-order': [
            0,
            {
                order: [
                    'DEFINITION',
                    'LIST_RENDERING',
                    'CONDITIONALS',
                    'RENDER_MODIFIERS',
                    'GLOBAL',
                    'UNIQUE',
                    'TWO_WAY_BINDING',
                    'OTHER_DIRECTIVES',
                    'OTHER_ATTR',
                    'EVENTS',
                    'CONTENT',
                ],
                alphabetical: true,
            },
        ],
        'vue/html-closing-bracket-newline': [
            0,
            {
                singleline: 'never',
                multiline: 'always',
            },
        ],
        'vue/multiline-html-element-content-newline': [
            0,
            {
                ignoreWhenEmpty: true,
                allowEmptyLines: true,
                ignores: ['pre', 'textarea', ...INLINE_ELEMENTS],
            },
        ],
        'vue/singleline-html-element-content-newline': [
            0,
            {
                ignoreWhenNoAttributes: true,
                ignoreWhenEmpty: true,
                ignores: ['pre', 'textarea', ...INLINE_ELEMENTS],
            },
        ],
        'vue/html-indent': 0,
        'vue/max-attributes-per-line': 0,
        'vue/html-self-closing': 0,

        'eol-last': 2,
    },
}
