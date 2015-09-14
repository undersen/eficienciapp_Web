var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    image = require('gulp-image'),
    minifyHTML = require('gulp-minify-html'),
    imagemin = require('gulp-imagemin'),
    imageResize = require('gulp-image-resize'),
    pngquant = require('imagemin-pngquant');

var paths = {
  sass: ['./www/css/*.scss'],
  js: ['./www/js/Main.js', './www/js/Config.js', './www/js/Run.js', './www/js/*/*.js']
};

gulp.task('resize', function () {
  gulp.src('start.png')
    .pipe(imageResize({ 
      width:0,
      height : 80,
      crop : true,
      upscale : true
    }))
    .pipe(gulp.dest('dist'));
});


gulp.task('html', function() {
  var opts = {
    conditionals: true,
    spare:true,
    comments:true  };

    return gulp.src('src/html/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('dist/'));
  });

gulp.task('image', function () {
  gulp.src('./src/media/images/iphone/*.jpg')
    .pipe(image())
    .pipe(gulp.dest('./dist/media/'));
});
 
 gulp.task('imagemin', function () {
    return gulp.src('./dist/media/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/images'));
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