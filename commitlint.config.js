export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'chore',
        'ci',
        'perf',
        'test',
      ],
    ],
    'scope-enum': [
      1,
      'always',
      [
        'sidebar',
        'nav',
        'theme',
        'build',
        'i18n',
        'scripts',
        'ci',
        'components',
      ],
    ],
  },
};
