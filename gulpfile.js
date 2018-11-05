const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');

// Directories to search SCSS files to compile. By default, node-sass does not
// compile files that begin with _.
const scssFilePaths = [
  "web/themes/custom/bignews/scss/*.scss",
];

// Build tasks.
gulp
  .task('build', ['build:sass'])
  .task('build:sass', () => {
    return gulp
      .src(scssFilePaths)
      .pipe(sassGlob())
      .pipe(sass({
        includePaths: [
          "node_modules",
          "web/libraries",
        ]
      }))
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest("web/themes/custom/bignews/css/"));
  });

// Watch tasks.
gulp
  .task('watch', ['watch:sass'])
  .task('watch:sass', () => {
    return gulp.watch(scssFilePaths, ['build:sass']);
  });
