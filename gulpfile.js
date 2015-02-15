var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint');

var APP_DIR = 'app/';
var BOWER_DIR = 'bower_components/';

var csslibs = [
  BOWER_DIR + 'font-awesome/css/font-awesome.css',
  BOWER_DIR + 'highlightjs/styles/github.css'
];

var jslibs = [
  BOWER_DIR + 'rivets/dist/rivets.bundled.min.js',
  BOWER_DIR + 'highlightjs/highlight.pack.js'
];

gulp.task('jslibs', function() {
  // console.log(jslibs)
  return gulp.src(jslibs)
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('csslibs', function() {
  // console.log(csslibs)
  return gulp.src(csslibs)
    .pipe(concat('libs.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function () {
  return sass(APP_DIR)
    .pipe(concat('app.css'))
    .on('error', function (err) {
        console.error('Error', err.message);
     })
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
  gulp.watch(APP_DIR, ['sass']);
});

gulp.task('build', ['jslibs', 'csslibs', 'sass']);
gulp.task('default', ['build', 'watch']);