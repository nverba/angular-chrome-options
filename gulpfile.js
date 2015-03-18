var gulp  = require('gulp');
var karma = require('karma').server;
var clean = require('gulp-clean');

// Use this to move updated dist folder to sample-app under node_modules
// Other node_module dependencies for sample-app need to be loaded separately
// The sample-app folder is not submitted to Git, do not edit files there directly!!!

gulp.task('clean-sample-app', [], function() {

  return gulp.src("sample-app/node_modules/angular-chrome-options/**.*")
    .pipe(clean());
});

gulp.task('build-sample', ['clean-sample-app'], function () {

  return gulp.src('./dist/*.*')
    .pipe(gulp.dest('./sample-app/node_modules/angular-chrome-options/dist'));
});

gulp.task('sample-watch', function() {
  gulp.watch('./dist/*.*', ['build-sample']);
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
