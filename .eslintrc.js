module.exports = {
  "extends": ["eslint:recommended"],
  "globals": {},
  "env": {
    "node": true,
    "es6": true,
    "mocha": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "script"
  },
  "rules": {
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-console": [
      "error",
      {
        "allow": ["info", "warn", "error"]
      }
    ]
  }
};
