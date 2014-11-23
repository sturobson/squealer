module.exports = {
  jade: {
    options: {
      basedir: 'views',
      data: function(dest, src) {
        return require('../views/data.json');
      },
      pretty: true
    },
    files: [{
      expand: true,
      cwd: 'views',
      src: [ '**/*.jade', '!layout/**/*.jade', '!includes/**/*.jade', '!**/clean.jade', ],
      dest: 'dev',
      ext: '.html'
    }]
  }
};
