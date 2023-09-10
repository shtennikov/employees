require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'airbnb-base',
        'plugin:vue/vue3-essential',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier/skip-formatting',
        'prettier'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],

        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',

        'max-lines-per-function': ['error', 40],
        'class-methods-use-this': 'off',

        // TypeScript
        'lines-between-class-members': 'off',
        '@typescript-eslint/no-inferrable-types': 'warn',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'array'
            }
        ],
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'explicit',
                overrides: {
                    accessors: 'explicit',
                    constructors: 'off',
                    methods: 'explicit',
                    properties: 'explicit',
                    parameterProperties: 'explicit'
                }
            }
        ]
    }
};
