module.exports = {
  options: {
    spawn: false,
  },
  sass: {
    files: ['sass/**/*.scss'],
    tasks: ['sass', 'stripmq', 'csspretty']
  },
  jade: {
    files: ['**/*.jade'],
    tasks: ['jade']
  }
};
