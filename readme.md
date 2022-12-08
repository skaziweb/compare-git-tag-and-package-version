# Package to compare tags in package.json and in repository branch

### The main reason for this package is do not forget add new tag after version update in package.josn

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
    "compare-tags": "compare-tags",
    "bump": "npm version patch -m 'AppName version updated to v%s'",
    "bump:minor": "npm version minor -m 'AppName version updated to v%s'",
    "bump:major": "npm version major -m 'NAppName version updated to v%s'"
  }
}
```

## Output examples

```shell
INFO: Application name: AppName
INFO: Application version: v1.0.4
INFO: Tag comparison test passed successfully!
```

```shell
INFO: Application name: AppName
INFO: Application version: v1.0.4
ERROR: 
  The version in the package v1.0.4 doesn't match the last tag v1.0.3
  HOW TO FIX:
  1. Rebase to the release or master branch, and try again.
  2. Add the tag with "git tag -a v1.0.4 -m 'AppName version bump v1.0.4'" command
  3. Launch following scripts to add version automatically:
    a) yarn bump - to upgrade the patch version,
    b) yarn bump:minor - to upgrade the minor version,
    c) yarn bump:major - to upgrade the major version        
```