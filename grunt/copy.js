module.exports = {
  copy: {
    files: [
      {expand: true, flatten: true, src: ['assets/js/vendor/*'], dest: 'dev/js/vendor/', filter: 'isFile'}
    ],
  }
};
