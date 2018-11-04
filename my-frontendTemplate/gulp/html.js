/**
 * HTMLの構文チェックを行う
 */
const gulp = require('gulp');
const htmlhint = require('gulp-htmlhint');

gulp.task('html', function(){
	gulp.src('app/src/**/*.html')
		.pipe(htmlhint())
		.pipe(htmlhint.reporter())
		.pipe(gulp.dest('app/product/'));
});