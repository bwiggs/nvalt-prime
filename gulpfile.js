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

var scripts = [
  BOWER_DIR + 'jquery/dist/jquery.min.js',
  BOWER_DIR + 'lodash/lodash.min.js',
  BOWER_DIR + 'rivets/dist/rivets.bundled.min.js',
  BOWER_DIR + 'highlightjs/highlight.pack.js',
  APP_DIR + '**/*.js'
];

var fonts = [
  BOWER_DIR + 'font-awesome/fonts/fontawesome.otf',
  BOWER_DIR + 'font-awesome/fonts/fontawesome-webfont.eot',
  BOWER_DIR + 'font-awesome/fonts/fontawesome-webfont.svg',
  BOWER_DIR + 'font-awesome/fonts/fontawesome-webfont.ttf',
  BOWER_DIR + 'font-awesome/fonts/fontawesome-webfont.woff',
  BOWER_DIR + 'font-awesome/fonts/fontawesome-webfont.woff2'
];

gulp.task('scripts', function() {
  // console.log(jslibs)
  return gulp.src(scripts)
    .pipe(concat('app.js'))
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

gulp.task('fonts', function() {
  gulp.src(fonts)
    .pipe(gulp.dest('fonts'));
});

var buildTasks = ['scripts', 'sass', 'csslibs', 'fonts'];

gulp.task('watch', function() {
  gulp.watch(APP_DIR, buildTasks);
  gulp.watch(APP_DIR + '**/*.js', ['scripts']);
});

gulp.task('build', buildTasks);

gulp.task('default', ['build', 'watch']);