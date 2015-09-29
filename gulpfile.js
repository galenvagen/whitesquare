var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename');

gulp.task('less', function() {
    gulp.src('./src/less/styles.less')
    .pipe(less())
    .pipe(concat('styles.css'))
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./www/css'));
});