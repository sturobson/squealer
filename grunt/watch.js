module.exports = {
  options: {
    spawn: false,
  },
  sass: {
    files: ['sass/**/*.scss'],
    tasks: ['sass']
  },
  jade: {
    files: ['**/*.jade'],
    tasks: ['jade']
  }
};
