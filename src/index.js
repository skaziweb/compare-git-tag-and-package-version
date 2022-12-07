const util = require("node:util");
const { exec } = require("node:child_process");

const execSync = util.promisify(exec);

const { appName, appVersion } = require("./config");
const { log } = require("./utils");

async function compare() {
    const  latestTag = await execSync("git describe --tag --abbrev=0");
    const { stdout: latest, stderr } = latestTag;

    log.info(`Application name: ${appName}`);
    log.info(`Application version: ${appVersion}`);

    if (stderr) {
        log.error(stderr)
    }

    let message;

    if (!latest) {
        message = `The tag ${latest} doesn't exist in current branch`;
        log.error(message)
    }

    const isVersionsEqual = `v${appVersion}` === latest;

    if (!isVersionsEqual) {
        message = `
          The version in the package v${appVersion} doesn't match the last tag ${latest}
          
          HOW TO FIX:
          1. Rebase to the release or master branch, and try again.
          2. Add the tag with "git tag -a v${appVersion} -m '${appName} version bump v${appVersion}'" command
          3. Launch following scripts to add version automatically:
            a) yarn bump - to upgrade the patch version,
            b) yarn bump:minor - to upgrade the minor version,
            c) yarn bump:major - to upgrade the major version
        `;
        log.error(message)
    }
    log.info('Tag comparison test passed successfully!')
};

module.exports = compare;