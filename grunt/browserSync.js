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
      proxy: "grunt.dev/dev",
      watchTask: true
    }
  }
};
