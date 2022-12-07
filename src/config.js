const path = require("path");
const rootDir = path.join(__dirname, "../../../");

const { appName, appVersion } = require(rootDir+"tags-compare-config");

console.log(rootDir);

module.exports = {
    rootDir,
    appName,
    appVersion
}