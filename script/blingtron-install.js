#!/usr/bin/env node
const path = require('path');
const { Command } = require('commander');
const { installService } = require('../src/deploy/windowsService');
const { log } = require('../src/utils/log');

const program = new Command();

program
  .description('创建windows services')
  .usage('blingtron install --source <src> --dest <dest>')
  .option('-s,--source <value>', '复制的目录路径')
  .option('-d,--dest <value>', '复制到的目录路径');

program.parse(process.argv);

const options = program.opts();

const { source, dest } = options;

if (source && dest) {
  const script = path.resolve(__dirname, './blingtron-copy.js');
  installService(script, `-s ${source} -d ${dest}`);
} else {
  log.error('请检查复制路径');
}
