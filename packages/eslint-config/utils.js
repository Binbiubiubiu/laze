function sortConfig(configs) {
  return [...configs.filter(c => !c.files), ...configs.filter(c => c.files)];
}

module.exports = {
  sortConfig,
};
