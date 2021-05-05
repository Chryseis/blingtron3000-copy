#!/usr/bin/env node
const pkg = require('../package.json');
const { Command } = require('commander');

const program = new Command();

program
  .version(pkg.version)
  .description('blingtron tools')
  .command('copy', 'copy files & watch files into other directory')
  .alias('c')
  .command('install', 'install windows services')
  .alias('i')
  .command('uninstall', 'uninstall windows services');

program.parse(process.argv);
