module.exports = {
    // processors: ['stylelint-processor-html'],
    plugins: [
        // 'stylelint-plugin-stylus',
        // 'stylelint-selector-bem-pattern',
    ],
    extends: [
        // add more generic rulesets here, such as:
        // 'stylelint-config-standard',
        'stylelint-plugin-stylus/standard',
    ],
    rules: {
        // override/add rules settings here, such as:
        'stylus/indentation': 4,
        'stylus/at-extend-style': ['@extend'],
        'stylus/at-rule-empty-line-before': [
            'always',
            {except: ['blockless-after-same-name-blockless', 'first-nested'], ignore: ['after-comment']},
        ],
        'stylus/at-rule-name-space-after': 'always-single-line',
        /*
            'stylus/block-closing-brace-empty-line-before': 'never',
            'stylus/block-closing-brace-newline-after': 'never',
            'stylus/block-closing-brace-newline-before': 'always-multi-line',
            'stylus/block-closing-brace-space-after': 'never',
        */
        'stylus/color-hex-case': 'lower',
        'stylus/declaration-colon': 'never',
        'stylus/hash-object-property-comma': ['always', {trailing: 'never'}],
        'stylus/selector-list-comma-newline-after': ['always-multi-line'],
        'stylus/selector-list-comma': ['always'],
        'stylus/number-leading-zero': 'never',
        /* bem */
        /*
        'plugin/selector-bem-pattern': {
            componentName: '[A-Z]+',
            componentSelectors: {
                initial: '^\\.{componentName}(?:-[a-z]+)?$',
                combined: '^\\.combined-{componentName}-[a-z]+$',
            },
            utilitySelectors: '^\\.util-[a-z]+$',
        },
        */
    },
}
