module.exports = {
  dev: {
    options: {
      quiet: false,
      maxSelectors: 4096,
      maxFileSize: 10240000
    },
    src: ['dev/css/styles.css']
  },
  oldIE: {
    options: {
      quiet: false,
      maxSelectors: 4096,
      maxFileSize: 10240000
    },
    src: ['dev/css/oldie.css']
  }
};
