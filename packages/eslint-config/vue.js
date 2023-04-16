const { sortConfig } = require('./utils');
const typescript = require('./typescript');

const vue = require('./conf/vue');

const configs = typescript.concat(vue);

module.exports = sortConfig(configs);
