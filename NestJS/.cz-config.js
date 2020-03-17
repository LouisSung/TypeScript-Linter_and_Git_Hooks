/**
 * @file [Commitizen Config] Strict Commitizen rules for NestJS
 * @version v1.1.0
 * @author LouisSung
 * @license MIT
 * @see https://github.com/commitizen/cz-cli
 * @see https://github.com/leonardoanalista/cz-customizable
 * @see https://www.conventionalcommits.org/zh-hant/v1.0.0-beta.4/
 */

module.exports = {
  path: './node_modules/cz-customizable',
  types: [
    {value: 'feat',     name: '* feat:        add new feature (e.g., redesign)'},
    {value: 'fix',      name: '* fix:         bugs fix ONLY'},
    {value: 'refactor', name: '* refactor:    code change that are NOT fix or feat (e.g., optimize)\n' +
        '           └─      // NEVER EVER introduce any FEATURE change!!'},
    {value: 'chore',    name: '* chore:       NO production code change (e.g., config change) (rarely used!)'},
    {value: 'wip',      name: '* WIP:         TMP commit (use as `git stash` alternative)\n' +
        '      └─           // NEVER EVER push WIP commit to remote!! (do `git reset`)'},
    {value: 'revert',   name: '+ revert:      rollback to previous commit (rarely used as of now)'},
    {value: 'docs',     name: '+ docs:        docs change ONLY'},
    {value: 'test',     name: '+ test:        test specs change ONLY'},
    {value: 'merge',    name: "+ marge:       git merge (e.g., `merge (develop): from branch 'feature/*'`)"}
  ],

  scopes: [{name: 'N/A', value: ''}],
  scopeOverrides: {
    merge: [{name: 'develop'}, {name: 'master'}]
  },

  messages: {
    type: 'Select the type of change that you\'re committing:',
    scope: '\nDenote the SCOPE of this change (optional):',
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change (required):\n',
    body: 'Provide a LONGER description of the change (required).\nUse "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
 },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix', 'merge'],
  skipQuestions: ['breaking', 'footer'],
  subjectLimit: 67,  // 72 - 3(types) - 2(: )
};
