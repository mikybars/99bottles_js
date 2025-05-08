// eslint.config.js
import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {

      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/lines-between-class-members': ['warn', 'always'],
      "@stylistic/js/padding-line-between-statements": [
        "error",
        { "blankLine": "always", "prev": "class", "next": "*" }
      ],
      '@stylistic/js/no-multiple-empty-lines': ['warn', { 'max': 1 }],
      '@stylistic/js/padded-blocks': ['warn', { 'classes': 'never' }],
      '@stylistic/js/max-len': ['error', { 'code': 130 }],
      '@stylistic/js/semi': ['error', 'always'],
    }
  }
];
