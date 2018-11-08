const hooks = require('semantic-release-monorepo-hooks');
const output = hooks();

const publish = output.isLastModified
  ? [
    {
      path: '@semantic-release/exec',
      cmd: 'echo "Execute publish/deploy commands and scripts"'
    },
    '@semantic-release/github'
  ]
  : [
    '@semantic-release/github'
  ];

module.exports = {
  branch: 'master',
  tagFormat: 'v${version}',
  verifyConditions: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github'
  ],
  // verifyRelease: [
  //   '@semantic-release/npm',
  //   '@semantic-release/github'
  // ]
  //   .map(require)
  //   .map(x => x.verifyConditions),
  prepare: [
    {
      path: '@semantic-release/changelog',
      changelogTitle: '# CHANGELOG'
    },
    '@semantic-release/npm',
    '@semantic-release/git'
  ],
  publish: publish,
  success: [
    '@semantic-release/github'
  ],
  fail: [
    '@semantic-release/github'
  ],
  npmPublish: false
};
