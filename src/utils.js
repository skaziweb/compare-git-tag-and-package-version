const chalk = require('chalk');

const toString = (message) => typeof message !== 'object' ? message : JSON.stringify(message);

const log = {
    info: (message) => console.log(chalk.blue(`INFO: ${toString(message)}`)),
    warn: (message) => console.log(chalk.yellow(`WARNING: ${toString(message)}`)),
    error: (message) => {
        console.log(chalk.red(`ERROR: ${toString(message)}`));
        throw new Error(toString(message));
    }
};

module.exports = {
    log
};