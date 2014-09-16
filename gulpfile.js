var gulp  = require('gulp');
var karma = require('karma').server;

var karmaCommonConf = {

  browsers: ['Chrome'],
  frameworks: ['mocha', 'chai', 'chai-as-promised', 'sinon-chai'],
  autoWatch: true,
  files: [
    '../angular/angular.js',
    '../angular-mocks/angular-mocks.js',
    'app/*.js',
    'tests/**/*.js'
  ],
  client: {
    mocha: {
      ui: 'bdd'
    }
  }
};

gulp.task('karma', function (done) {
  karma.start(karmaCommonConf, done);
});

gulp.task('default', ['karma']);
