var gulp = require('gulp');
var del = require('del');
var argv = require('yargs').argv;
var babel = require('gulp-babel');

gulp.task('clean', function () {
  return del.sync(['build']);
});

// convert to es5 from es6 src modules with babel
gulp.task('lib', function (cb) {
  return gulp.src('./src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('build/'));
});


gulp.task('default', ['clean', 'lib']);
