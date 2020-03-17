# Linter & Git Hooks for TypeScript | NestJS
## Config files
### [**`eslint`**](NestJS/.eslintrc.js)
* Validate code format
  + [***`npm run lint`***](NestJS/package.json#L12)

### [**`commitlint`**](NestJS/.commitlintrc.js)
* Validate commit message
  + Auto trigger [when commit](NestJS/.huskyrc.js#L9)
  + type-required(scope-optional): subject-required  
    emptyline-required  
    [body-required](NestJS/.commitlintrc.js#L15)

### [**`Commitizen`**](NestJS/.cz-config.js)
* Generate valid commit message through interactive Q&A
  + [***`npm run commit`***](NestJS/package.json#L18)
    - `-S` stand for [GPG signed commit](https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work)
  + Note that the generation for body is not good enough (at least to me)
    - The body wrapping is not friendly enough (use `|` as line break rather than `enter`)
    - The length limitation is unconfigurable as of no
       * CZ use **100** as default but our commitlint [setting](NestJS/.commitlintrc.js#L16) requires **72**
  + The better solution is to let CZ generate header for you, then post it to `Vim`, which helps you on auto wrap
    - Use empty body and force quit when confirm

### [**`Husky`**](NestJS/.huskyrc.js)
* Git hooks for [commit-msg](NestJS/.huskyrc.js#L42), [pre-commit](NestJS/.huskyrc.js#L43), and [pre-push](NestJS/.huskyrc.js#L44)
  + **`commit-msg`**: trigger the [commitlint](NestJS/.huskyrc.js#L9)
  + **`pre-commit`**: trigger the [GPG key check](NestJS/.huskyrc.js#L10-L18), eslint, and unit test (changed files only)
  + **`pre-push`**: trigger the [WIP commit check](NestJS/.huskyrc.js#L19-L24), unit test with coverage, e2e test, and [docs generation](NestJS/.huskyrc.js#L29-L38) using [compodoc](https://compodoc.app/)
    - To gen docs: [`npm run doc:gen`](NestJS/package.json#L20)

---
## Environment set up
### Linter
#### [**`ESLint`**](https://github.com/eslint/eslint) for JavaScript
> JS only
* ***`npm install eslint --save-dev`***
##### [**`TypeScript ESLint`**](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) for TypeScript
> Add TS support
* ***`npm install @typescript-eslint/eslint-plugin@^2.12.0 --save-dev`***
#### [**`commitlint`**](https://github.com/conventional-changelog/commitlint) for Git commit
> Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
* ***`npm install @commitlint/config-conventional@^8.3.4 --save-dev`***
* ***`npm install @commitlint/cli@^8.3.5 --save-dev`***
##### [**`commitizen`**](https://github.com/commitizen/cz-cli)
* ***`npm install commitizen@^4.0.3 --save-dev`***
* ***`npm install cz-customizable@^6.2.0 --save-dev`***
  + [Add config](https://github.com/leonardoanalista/cz-customizable#option-1---cz-customizable-as-commitizen-plugin) to `package.json`
    - `"config": {"commitizen": {"path": "./node_modules/cz-customizable"}}`

### Git Hooks
#### [**`Husky`**](https://github.com/typicode/husky) for pre-commit, pre-push, and commit message hooks
* ***`npm install husky@^4.2.3 --save-dev`***
##### [**`Compodoc`**](https://github.com/compodoc/compodoc) for docs auto generation
* ***`npm install @compodoc/compodoc@^1.1.11 --save-dev`***
  + NestJS documentation [tutorial](https://docs.nestjs.com/recipes/documentation)
    - `compodoc src -p tsconfig.json -n 'Title Here' --hideGenerator`

---
## License
* These config files are licensed under the MIT License
