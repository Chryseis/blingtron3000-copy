#!/usr/bin/env node
const { Command } = require('commander');
const { watchFiles } = require('../src/lib/watchFiles');
const { copyAllFiles } = require('../src/lib/copyFiles');
const { log } = require('../src/utils/log');

const program = new Command();

program
  .version('1.0.0')
  .usage('copy --source D://picture --dest D://picture-new')
  .option('-s,--source <value>', '复制的目录路径')
  .option('-d,--dest <value>', '复制到的目录路径');

program.parse(process.argv);

const options = program.opts();

const { source, dest } = options;

if (source && dest) {
  copyAllFiles(source, dest);
  watchFiles(source, dest);
} else {
  log.error('请检查复制路径');
}
