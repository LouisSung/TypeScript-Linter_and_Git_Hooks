/**
 * @file [Husky Config] Git hooks checking for NestJS
 * @version v1.1.0
 * @author LouisSung
 * @license MIT
 * @see https://github.com/typicode/husky
 */

const runCommitLint = 'commitlint -E HUSKY_GIT_PARAMS --verbose';
const requireSignedCommit = `{
if [ "$(git config --get commit.gpgsign)" = 'true' ]; then
  if test -z "$(git config --get user.signingkey)"; then
    echo -e "\\e[1;31m>>> GPG key is not set!! ($ git config user.signingkey XXX)\\e[0m" && exit 1
  fi
else
  echo -e "\\e[1;31m>>> Require GPG signed commit!! ($ git config commit.gpgsign true)\\e[0m" && exit 1
fi
}`;
const rejectWIPCommit = `{
if test -n "$(git log --oneline | grep -P '[0-9a-f]{7} wip: ')"; then
  echo -e "\\e[1;31m>>> Commit with type 'wip: ' should NOT push to remote!!\\e[0m"
  git log --oneline --grep 'wip:' --color=always && exit 1
fi
}`;
const runESlint = 'npm run lint';
const runUnitTestOnlyChanged = 'npm run test -- --onlyChanged';
const checkTestCoverage = 'npm run test:cov';
const runE2eTest = 'npm run test:e2e';
const genDocs = `{
DOCS_DIR='./documentation'
COVERAGE=$(npm run docs:cov --silent)
if test $? -eq 0; then
  npm run docs:gen -- -d "$DOCS_DIR"
else
  COVERAGE="$(echo "$COVERAGE" | grep threshold)"
  echo -e "\\e[1;31m>>> $COVERAGE\\e[0m" && exit 1
fi
}`;

module.exports = {
  'hooks': {
    'commit-msg': `${runCommitLint}`,
    'pre-commit': `${requireSignedCommit} && ${runESlint} && ${runUnitTestOnlyChanged}`,
    'pre-push': `${rejectWIPCommit} && ${checkTestCoverage} && ${runE2eTest} && ${genDocs}`
  }
};
