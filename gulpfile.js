const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
// const imagemin = require('gulp-imagemin');
const obfuscator = require('gulp-javascript-obfuscator');
// const sharp = require('sharp');

// const imagemin = import('gulp-imagemin');

// Minify HTML
gulp.task('html', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

// Minify CSS
gulp.task('css', () => {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
});

// Minify and obfuscate JavaScript
gulp.task('js', () => {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(obfuscator())
    .pipe(gulp.dest('dist/js'));
});

//Copy Images
gulp.task('images', () => {
  return gulp.src('src/image/*')
    .pipe(gulp.dest('dist/image'));
});

// Optimize images
// gulp.task('images', () => {
//   return gulp.src('src/image/*')
//     .pipe(imagemin())
//     .pipe(gulp.dest('dist/image'));
// });

// gulp.task('images', async () => {
//     const imageminInstance = await imagemin;
//     return gulp.src('src/image/*')
//       .pipe(imageminInstance())
//       .pipe(gulp.dest('dist/image'));
// });

// Optimize images
// gulp.task('images', () => {
//   return gulp.src('src/image/*')
//     .pipe(gulp.dest('dist/image')) // Copy original images to the destination folder
//     .pipe(sharp({
//       failOnError: false,
//     })
//     .jpeg({ quality: 80 }) // Optimize JPEG images
//     .png({ quality: 80 })  // Optimize PNG images
//     )
//     .pipe(gulp.dest('dist/image'));
// });


// Default task
gulp.task('default', gulp.parallel('html', 'css', 'js', 'images'));
// gulp.task('default', gulp.parallel('html', 'css', 'js'));
