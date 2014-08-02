var concat = require('gulp-concat');
var gulp = require('gulp');
var markdox = require('gulp-markdox');


gulp.task('docs', function () {
  gulp.src('./galaxy.js')
    .pipe(markdox())
    .pipe(concat('docs.md'))
    .pipe(gulp.dest('./docs'));
});
