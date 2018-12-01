'use strict';
const gulp = require('gulp');
const browserSync = require('browser-sync');


require('./gulp/html');
require('./gulp/sass');
require('./gulp/ejs');
require('./gulp/imgmin');
require('./gulp/copy');
require('./gulp/watch');
require('./gulp/browserSync');
require('./gulp/babel');
require('./gulp/script');


// タスクを複数実行する
gulp.task('default', gulp.series(gulp.parallel('sass', 'ejs', 'imgmin', 'copy', 'watch', 'bs-reload', 'browser-sync', 'valid'), () => {
	browserSync.init({
		server: {
			baseDir: "./app/product" //リロード時に起動するフォルダを指定する。
		}
	})
	gulp.watch('app/src/sass/**', ['bs-reload']),
		gulp.watch('app/src/ejs/**', ['bs-reload'])
}));
