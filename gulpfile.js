const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

function buildStyles() {
    return gulp.src('scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('css/'));
};

function browsersync() {
    browserSync.init({
      server: { baseDir: "./" },
    });
}

function watch() {
    gulp.watch('scss/*.scss', { delay: 500 },  buildStyles);
    gulp.watch(["*.html", 'css/*.css', 'script/*.js'], browserSync.reload);
  
}

exports.watch = gulp.parallel(browsersync, watch);
