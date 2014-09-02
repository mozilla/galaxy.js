var concat = require('gulp-concat');
var gulp = require('gulp');
var markdox = require('gulp-markdox');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var Duo = require('duo');
var map = require('map-stream');


gulp.task('compile', function () {
  gulp.src('./src/galaxy.js')
    .pipe(duo())
    .pipe(gulp.dest('dist'))  // uncompressed
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.extname = '.min.js';
    }))
    .pipe(gulp.dest('dist'));  // minified
});


gulp.task('docs', function () {
  gulp.src('./src/galaxy.js')
    .pipe(markdox())
    .pipe(concat('docs.md'))
    .pipe(gulp.dest('./docs'));
});


gulp.task('default', ['compile', 'docs']);


gulp.task('dev', function () {
  gulp.watch('./src/galaxy.js', ['compile', 'docs']);
});


function duo(opts) {
  opts = opts || {};

  return map(function (file, fn) {
    Duo(__dirname)
      .entry(file.path)
      .run(function (err, src) {
        if (err) {
          return fn(err);
        }

        file.contents = new Buffer(src);
        fn(null, file);
      });
  });
}
