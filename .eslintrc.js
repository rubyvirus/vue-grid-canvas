// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // check if imports actually resolve
    'settings': {
        'import/resolver': {
            'webpack': {
                'config': 'build/webpack.base.conf.js'
            }
        }
    },
    // add your custom rules here
    'rules': {
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            'js': 'never',
            'vue': 'never'
        }],
        // allow optionalDependencies
        'import/no-extraneous-dependencies': ['error', {
            'optionalDependencies': ['test/unit/index.js']
        }],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        "indent": [2, 4],
        "eol-last": 1,
        "semi": [2, "never"],
        "no-restricted-syntax": 0,
        "no-param-reassign": 0,
        "max-len": 0,
        "no-labels": 0,
        "no-continue": 0,
        "global-require": 0,
        "import/no-dynamic-require": 0,
        "no-shadow": 0,
        "no-underscore-dangle": 0,
        "linebreak-style": 0,
        "linebreak-style": 0
    }
}
