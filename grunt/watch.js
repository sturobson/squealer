module.exports = {
  options: {
    spawn: false,
    title: 'Task Complete',
    message: 'SASS and Uglify finished running'
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
