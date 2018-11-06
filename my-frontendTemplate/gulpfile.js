'use strict';
const gulp = require('gulp');
const browserSync = require('browser-sync');
const notify = require('gulp-notify');

require('./gulp/html.js');
require('./gulp/sass.js');
require('./gulp/ejs.js');
require('./gulp/imgmin.js');
require('./gulp/copy.js');
require('./gulp/watch.js');
require('./gulp/babel.js');
require('./gulp/script.js');

// タスクを複数実行する
gulp.task('default', gulp.series(gulp.parallel('sass', 'ejs', 'imgmin', 'copy', 'watch', 'reload', 'browser-sync'), () => {
	browserSync.init({
		server: {
			baseDir: "./app/src/" //リロード時に起動するフォルダを指定する。
		}
	})
}));

