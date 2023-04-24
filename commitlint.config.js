module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(.*?)(?:\((.*)\))?:?\s(.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
  rules: {
    "type-enum": [
      2,
      "always",
      [
        '✨feat',
        '🐛fix',
        '📝docs',
        '🚀perf',
        '📦build',
        '👷ci',
        '🔂revert',
        '💎style',
        '🚨test',
        '🔀merge'
      ],
    ],
    'type-case': [0],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
  },
};
