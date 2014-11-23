module.exports = {
  default_option: {
    bsFiles: {
      src: [
      'dev/css/*.css',
      '**/*.html',
      'img/*',
      'js/**/*.js'
      ]
    },
    options: {
      watchTask: true,
      server: {
        baseDir: './dev/',
        directory: false
      }
    }
  }
};
