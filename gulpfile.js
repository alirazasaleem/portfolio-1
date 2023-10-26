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
    .pipe(gulp.dest('docs'));
});

// Minify CSS
gulp.task('css', () => {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('docs/css'));
});

// Minify and obfuscate JavaScript
gulp.task('js', () => {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(obfuscator())
    .pipe(gulp.dest('docs/js'));
});

//Copy Images
gulp.task('images', () => {
  return gulp.src('src/image/*')
    .pipe(gulp.dest('docs/image'));
});

// Optimize images
// gulp.task('images', () => {
//   return gulp.src('src/image/*')
//     .pipe(imagemin())
//     .pipe(gulp.dest('docs/image'));
// });

// gulp.task('images', async () => {
//     const imageminInstance = await imagemin;
//     return gulp.src('src/image/*')
//       .pipe(imageminInstance())
//       .pipe(gulp.dest('docs/image'));
// });

// Optimize images
// gulp.task('images', () => {
//   return gulp.src('src/image/*')
//     .pipe(gulp.dest('docs/image')) // Copy original images to the destination folder
//     .pipe(sharp({
//       failOnError: false,
//     })
//     .jpeg({ quality: 80 }) // Optimize JPEG images
//     .png({ quality: 80 })  // Optimize PNG images
//     )
//     .pipe(gulp.dest('docs/image'));
// });


// Default task
gulp.task('default', gulp.parallel('html', 'css', 'js', 'images'));
// gulp.task('default', gulp.parallel('html', 'css', 'js'));
