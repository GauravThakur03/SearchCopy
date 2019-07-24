module.exports = {
    "rules": {
        "promise/always-return": "error",
        "promise/no-return-wrap": "error",
        "promise/param-names": "warn",
        "promise/catch-or-return": ["error", {"allowThen": true }],
        "promise/no-native": "off",
        "promise/no-nesting": "warn",
        "promise/no-promise-in-callback": "warn",
        "promise/no-callback-in-promise": "warn",
        "promise/avoid-new": "off",
        "promise/no-new-statics": "error",
        "promise/no-return-in-finally": "warn",
        "promise/valid-params": "error"
    }
};
