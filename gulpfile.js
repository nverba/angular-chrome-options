var gulp  = require('gulp');
var karma = require('karma').server;

// Use this to move updated dist folder to sample-app under node_modules
// Other node_module dependencies for sample-app need to be loaded separately
// The sample-app folder is not submitted to Git, do not edit files there directly!!!

gulp.task('dist-to-sample', function () {

  return gulp.src('./dist/*.*')
    .pipe(gulp.dest('./sample-app/node_modules/angular-chrome-options'));
});

var karmaCommonConf = {

  browsers: ['Chrome'],
  frameworks: ['mocha', 'chai', 'chai-as-promised', 'sinon-chai'],
  autoWatch: true,
  files: [
    'node_modules/angular/angular.js',
    'node_modules/angular-mocks/angular-mocks.js',
    'dist/*.js',
    'tests/test-modules/data.js',
    'tests/test-modules/chrome-storage-api.js',
    'tests/*.js'
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
