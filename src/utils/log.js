const chalk = require('chalk');

const log = {
  info() {
    console.log(chalk.green(...arguments));
  },
  warn() {
    console.log(chalk.yellow(...arguments));
  },
  error() {
    console.log(chalk.red(...arguments));
  }
};

module.exports = {
  log
};
