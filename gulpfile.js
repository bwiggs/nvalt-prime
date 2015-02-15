var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint');

var BOWER_DIR = ''

var csslibs = [
  BOWER_DIR + 'font-awesome/css/font-awesome.css',
  BOWER_DIR + 'highlightjs/styles/github.css'
];

var jslibs = [
  BOWER_DIR + 'bower_components/rivets/dist/rivets.bundled.min.js',
  BOWER_DIR + 'highlightjs/highlight.pack.js'
];

gulp.task('scripts', function() {
  // console.log(jslibs)
  return gulp.src(jslibs)
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('styles', function() {
  // console.log(csslibs)
  return gulp.src(csslibs)
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['scripts', 'styles']);