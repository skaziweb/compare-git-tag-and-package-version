const { execSync } = require("node:child_process");

const { appName, appVersion } = require("./config");

async function compare() {
    const { stdout: latest, stderr } = await execSync("git describe --tag --abbrev=0");
    if (stderr) {
        console.log(rootDir)
        return;
        throw new Error(`stderr= ${stderr}`);
    }
    const isVersionsEqual = `v${appVersion}` === latest;
    if (!isVersionsEqual) {
        throw new Error(`
          The version in the package v${appVersion} doesn't match the last tag ${latest}
          Please add the tag with 'git tag -a v${appVersion} -m "${appName} v${appVersion}"' command
          Or launch following scripts
          yarn bump - to upgrade the patch version,
          yarn bump:minor - to upgrade the minor version,
          yarn bump:major - to upgrade the major version
        `);
    }
};

module.exports = compare;