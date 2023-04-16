const base = require('./base');

const importConf = require('./conf/import');
const typescript = require('./conf/typescript');

const configs = base.concat(importConf.typescript, typescript);

module.exports = [...configs.filter(c => !c.files), ...configs.filter(c => c.files)];
