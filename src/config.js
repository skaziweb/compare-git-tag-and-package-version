let config = {}, appVersion, appName;

try {
    config = require(process.cwd()+"/tags-compare-config");
    appVersion = config.appVersion;
    appName = config.appName;
} catch (e) {}

if (!config.appName) {
    try {
        config = require(process.cwd()+"package.json");
        appVersion = config.version;
        appName = config.name.replace(/(_|-)/gmi, ' ');
    } catch (e) {}
}

module.exports = {
    appName,
    appVersion
}