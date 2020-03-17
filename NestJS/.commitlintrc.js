/**
 * @file [commitlint Config] Strict commitlint rules for NestJS
 * @version v1.1.0 (LouisSung)
 * @author LouisSung
 * @license MIT
 * @see https://commitlint.js.org/#/reference-rules
 * @see https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/rules/src
 * @see https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-conventional/index.js
 * @see https://medium.com/@peter3036200/git-cz-%E8%A6%8F%E7%AF%84%E4%BD%A0%E7%9A%84-commit-%E8%A8%8A%E6%81%AF-9bd8f91b3267
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-empty': [2, 'never'],  // @LS: use `N/A` as body if you really have nothing to say... (NOT recommended)
    'body-max-line-length': [2, 'always', 72],  // both header and body length are limited to 72 chars
    'header-max-length': [2, 'always', 72],
    'subject-min-length': [2, 'always', 5],  // start with imperative VERB and give INFORMATIVE info
    'type-enum': [2, 'always',[
      'feat',  // add new feature (e.g., redesign)
      'fix',  // bugs fix ONLY
      'refactor',  // code change that are NOT fix or feat (NEVER EVER introduce any FEATURE change!!)
      'chore',  // NO production code change (e.g., remove WIP tag in release branch)
      'wip',  // use as `git stash` alternative (NEVER EVER push WIP to remote!! (do `git reset`))
      'revert',  // rollback to previous commit
      'docs',  // docs change ONLY
      'test',  // test specs change ONLY
      'merge',  // e.g., `merge (develop): from branch 'feature/*'`
    ]]
  }
};
