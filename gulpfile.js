var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    image = require('gulp-image'),
    minifyHTML = require('gulp-minify-html'),
    var less = require('gulp-less'),
    pngquant = require('imagemin-pngquant');



gulp.task('html', function() {
  var opts = {
    conditionals: true,
    spare:true,
    comments:true  };
    return gulp.src('src/html/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('dist/'));
  });


gulp.task('less', function () {
  return gulp.src('./src/sass/*.less')
    .pipe(less())
    .pipe(gulp.dest('./public/css'));
});



gulp.task('image', function () {
  gulp.src('./src/media/images/logos/*.png')
    .pipe(image())
    .pipe(gulp.dest('./dist/media/'));
});


 




gulp.task('compress', function() {
  return gulp.src('./src/lib/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./'));
});




gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
     .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'))
});

gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.scss', ['sass','compress']);
});