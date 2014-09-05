var exec = require('child_process').exec;

var chmod = require('gulp-chmod');
var concat = require('gulp-concat');
var ghPages = require('gulp-gh-pages');
var gulp = require('gulp');
var markdox = require('gulp-markdox');
var rename = require('gulp-rename');
var symlink = require('gulp-symlink');
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
  // TODO: Make a `gulp-doxx` project.
  exec('node_modules/doxx/bin/doxx --source ./src --target ./docs --ignore components -- &&' +
       'sed -i.bak \'s/brand">Doxx</brand">Documentation</g\' docs/*.html && ' +
       'rm docs/*.bak', function (err, stdout, stderr) {
    if (stderr) {
      return console.error(stderr);
    }
    console.log(stdout);
  });
});


gulp.task('default', ['compile', 'docs']);


gulp.task('dev', function () {
  gulp.watch('src/galaxy.js', ['compile', 'docs']);
});


gulp.task('symlink-git-hooks', function () {
  return gulp.src('scripts/git_hooks/*')
    .pipe(symlink('.git/hooks/'))
    .pipe(chmod(755))
    .pipe(gulp.dest('.git/hooks/'));
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
