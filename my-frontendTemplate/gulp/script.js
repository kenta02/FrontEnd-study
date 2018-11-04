const gulp = require('gulp');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const eslint = require('gulp-eslint');
const browserSync = require('browser-sync');
gulp.task('script', function(){
	gulp.src('app/src/js/*.js')
		.pipe(plumber({
			errorHandler: notify.onError('Error: <%= error.message %>')
		}))
		.pipe(eslint({useEslintrc: true}))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError())
		.pipe(eslint.result(function(result){
			if(result.errorCount !== 0) {
				return;
			}
			gulp.src(result.filePath)
				.pipe(gulp.dest('app/product/js/'));
		}))
		.pipe(browserSync.stream());
});