module.exports = {
  sass: {
    files: ['sass/**/*.scss'],
    tasks: ['sass']
  },
  jade: {
    files: ['**/*.jade'],
    tasks: ['jade']
  },
  livereload: {
    options: {
      livereload: 1337
    },
    files: [
    './',
    ]
  }
};
