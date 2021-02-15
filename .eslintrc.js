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
        "object-curly-spacing": ["error", "always"],
        // "quotes": [2, "double", "avoid-escape"],
        "quotes": [
            "error",
            "single",
            { "avoidEscape": true, "allowTemplateLiterals": false }
        ],
        "spaced-comment": "off",
        "no-console": "warn",
        "consistent-return": "off",
        "func-names": "off",
        "object-shorthand": "off",
        "no-process-exit": "off",
        "no-param-reassign": "off",
        "no-return-await": "off",
        "no-underscore-dangle": "off",
        "class-methods-use-this": "off",
        "prefer-destructuring": ["error", { "object": true, "array": false }],
        "no-unused-vars": ["error", { "argsIgnorePattern": "req|res|next|val" }],
        "space-before-function-paren": ["error", "always"],
        "new-cap": ["error", { "capIsNewExceptions": ["Router", "Schema"] }],
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
        }],
        "indent": ["error", 2],
    }
};
