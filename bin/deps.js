#!/usr/bin/env node
var deps = require('../lib');

var script = process.argv[2];
var packageManager = process.argv[3];
var groupName = process.argv[4];

var code = deps(script, packageManager, groupName);
process.exit(code);
