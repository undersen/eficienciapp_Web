var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
	minifyHTML = require('gulp-minify-html');


gulp.task('html', function() {
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
    .pipe(gulp.dest('dist/js'));
});


gulp.task('sass', function () {
  gulp.src('src/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});
 
gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.scss', ['sass','compress']);
});