module.exports = {
  options: {
    template: {
      src: 'styleguide/'
    },
    framework: {
      name: 'kss',
      options: {
        includeType: 'sass',
        includePath: 'dev/assets/css/style.css'
      }
    }
  },
  all: {
    files: [{
      'dev/styleguide': 'sass/**/*.scss'
    }]
  }
};
