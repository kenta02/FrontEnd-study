/**
 * HTMLの構文チェックを行う
 */
'use strict';
const gulp = require('gulp');
const browserSync = require('browser-sync');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const htmlhint = require('gulp-htmlhint');
const htmlValidation = require('gulp-html-validator');


gulp.task('valid', () => {
	return gulp.src("../app/product/*.html")
		.pipe(plumber({
			errorHandler: notify.onError("Error: <%= error.message %>")
		}))
		.pipe(htmlValidation())
		.pipe(gulp.dest('../app/product/validout'));
});


gulp.task('html', () => {
	gulp.src('../app/src/**/*.html')
		.pipe(htmlhint())
		.pipe(htmlhint.reporter())
		.pipe(gulp.dest('../app/product/'));
});