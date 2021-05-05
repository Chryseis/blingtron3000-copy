#!/usr/bin/env node
const path = require('path');
const { Command } = require('commander');
const { uninstallService } = require('../src/deploy/windowsService');

const program = new Command();

program.usage('blingtron uninstall');

const script = path.resolve(__dirname, './blingtron-copy.js');
uninstallService(script);
