var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	minifyHTML = require('gulp-minify-html');


gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare:true,
    comments:true  };
 
  return gulp.src('src/html/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('dist/'));
});


gulp.task('compress', function() {
  return gulp.src('lib/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});