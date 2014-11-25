module.exports = {
  copy: {
    files: [
      {expand: true, flatten: true, src: ['assets/js/vendor/*'], dest: 'dev/assets/js/vendor/', filter: 'isFile'}
    ],
  },
  img: {
    files: [
      {expand: true, flatten: true, src: ['assets/images/**/*'], dest: 'dev/assets/images/', filter: 'isFile'}
    ],
  }
};
