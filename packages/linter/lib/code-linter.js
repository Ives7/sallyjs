#!/usr/bin/env node
require("eslint"),require("path"),exports.baseConfig={env:{browser:!0,es2021:!0,node:!0},extends:["plugin:react/recommended","standard","plugin:@typescript-eslint/recommended","prettier","prettier/react","prettier/@typescript-eslint","prettier/prettier"],parser:"@typescript-eslint/parser",parserOptions:{ecmaFeatures:{jsx:!0},ecmaVersion:11,sourceType:"module"},plugins:["react","@typescript-eslint","prettier"],rules:{"prettier/prettier":"error","@typescript-eslint/explicit-module-boundary-types":0,"@typescript-eslint/no-empty-function":0,"@typescript-eslint/no-inferrable-types":0,"spaced-comment":0,"@typescript-eslint/no-var-requires":0,"@typescript-eslint/no-explicit-any":0,"@typescript-eslint/ban-ts-comment":0}};
//# sourceMappingURL=code-linter.js.map
