module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2020": true,
        "node": true
    },
    "extends": ["eslint:recommended", "plugin:prettier/recommended", "google"],
    "plugins": ["prettier"],
    "parserOptions": {
        "ecmaVersion": 11
    },
    "rules": {
        "prettier/prettier": ["error", { "singleQuote": true }]
    }
};
