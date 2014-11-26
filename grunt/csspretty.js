module.exports = {
  dist: {
    options: {
      decl: {
        before: '\n',
        between: ':',
      },
      rule: {
        before: '\n\n',
        between: '',
        after: '\n',
      },
      atRule: {
        before: '\n\n',
        between: '',
        after: '\n\n',
      },
      selectors: 'separateline',
    },
    src: 'dev/assets/css/oldie.css',
  }
};
