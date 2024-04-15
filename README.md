# nFocus Playwright base configuration project
A repo to decide on informal standards for new Playwright projects created by nFocus SDETs

## Install
### npm modules
```bash
npm install -D @playwright/test @types/node @eslint/js@8.57.0 eslint@8.57.0 typescript typescript-eslint
```
### VSCode extensions
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Playwright](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Files
- [`eslint.config.js`](#eslintconfigjs) - ESLint config
- [`.prettier.config.js`](#eslintconfigjs) - Prettier config
- [`tsconfig.json`](#eslintconfigjs) - Typescript settings

---

### <a name="#eslintconfig"></a>`eslint.config.js`
Uses the `typescript-eslint` package to allow `ESLint` to lint Typescript files. 
#### [Rules Documentation](https://typescript-eslint.io/rules)
Use the link above to find new rules.\
Use `.prettier.config.js` for stylistic rules.\
The following rules have been implemented.

- `"@typescript-eslint/restrict-template-expressions": "off"`
- `"@typescript-eslint/no-base-to-string": ["warn", { ignoredTypeNames: ["Locator", "Date"] }]`

---
### <a name="#prettierconfig"></a>`.prettier.config.js`
Used by the Prettier VSCode plugin to have consistant styling across all js/ts files.

#### [Rules Documentation](https://prettier.io/docs/en/options)
The following rules have been implemented.

- `tabWidth: 2`
- `trailingComma: "es5"`
- `experimentalTernaries: true`

---
### <a name="#tsconfig"></a>`tsconfig.json`
[Documentation](https://www.typescriptlang.org/tsconfig)

#### `baseUrl`
Sets the base directory to resolve non-relative module names. Defaults to `"."` (root folder)

#### `paths`
This allows you to simplify your imports in a `.ts` file, so instead of 
```js
import Homepage from '../../pages/Homepage'
```
you can write
```js
import Homepage from '@pages/Homepage'
```

## Folder Structure Index.ts
Say you have the following pages folder structure:
```
pages
 ┣ Account.ts
 ┣ AccountOrders.ts
 ...
```
Normally you'd have to import `Account.ts` and `AccountOrders.ts` files (using path syntax) as below:
```js
import Account from '@pages/Account.ts'
import AccountOrders from '@pages/AccountOrders.ts'
```

If you create an `index.ts` inside the `pages` folder with the following:
```ts
export { default as Account } from "./Account"; // If default export
export { AccountOrders } from "./AccountOrders"; // If named export
...
```
You could change tsconfig.json from
```json
"@pages/*": ["pages/*"],
```
to
```json
"@pages": ["pages/index"],
```
and then import `Account.ts` and `AccountOrders.ts` using
```ts
import { Account, AccountOrders } from '@pages'
```

## Notes
- Currently requires specific npm package versions:
   - "eslint": "8.57.0",
   - "@eslint/js": "8.57.0", 
- Use pre-release version of VSCode ESLint plugin
   - Currently v3.0.5
