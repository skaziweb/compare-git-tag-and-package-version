let config = {};

try {
    config = require(process.cwd()+"/tags-compare-config");
} catch (e) {
    console.log('Config file not found and skipped!')
}

if (!config.appName) {
    try {
        config = require(process.cwd()+"/package.json");
        config.appVersion = config.version;
        config.appName = config.name.replace(/(_|-)/gmi, ' ');
    } catch (e) {
        console.log(e);
        throw new Error('Something went wrong! See above!')
    }
}

module.exports = {
   ...config
}