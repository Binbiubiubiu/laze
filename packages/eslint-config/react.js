const { sortConfig } = require('./utils');
const typescript = require('./typescript');

const react = require('./conf/react');

const configs = typescript.concat(react);

module.exports = sortConfig(configs);
