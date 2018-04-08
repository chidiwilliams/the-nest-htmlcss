var gulp = require("gulp");
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('parts/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['templates']
    }))
  .pipe(gulp.dest('.'))
});