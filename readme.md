# Package to compare tags in package.json and in repository branch

## Install package
```shell
yarn add -D "compare-git-tag-and-package-version"
npm i -D "compare-git-tag-and-package-version"
```

## Create tags-compare-config.js in the project root directory

```js
const appName = "AppName";
const { version: appVersion } = require("./package.json");

module.exports = {
    appName,
    appVersion
}
```

## Add new command to package.json in script section

```json
{
  "scripts" : {
    "compare-tags": "compare-tags"
  }
}
```