module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 11,
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint'
    ],
    'rules': {
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 1,
        '@typescript-eslint/no-inferrable-types': [
            'warn', {
                'ignoreParameters': true
            }
        ],
        '@typescript-eslint/no-unused-vars': 'warn'
    },
    'ignorePatterns': ['.eslintrc.js', 'tsconfig.json', 'webpack.config.js', 'babel.config.js'],
};
