'use strict';
const gulp = require('gulp');
const browserSync = require('browser-sync');
const notify = require('gulp-notify');

require('./gulp/html.js');
require('./gulp/sass.js');
require('./gulp/ejs.js');
require('./gulp/imgmin.js');
require('./gulp/copy.js');
require('./gulp/babel.js');
require('./gulp/script.js');

gulp.task('browser-sync', () => {
	browserSync.init({
		server: "./app/product"
	});
});

gulp.task('reload', () => {
	browserSync.reload();
});

gulp.task("watch", () => {
	gulp.watch(["app/src/sass/**"], () => {
		gulp.Zstart(["sass"]);
	});
	gulp.watch(["app/src/ejs/**"], () => {
		gulp.start(["ejs"]);
	});
});

// タスクを複数実行する
gulp.task('default', gulp.series(gulp.parallel('sass', 'ejs', 'imgmin', 'copy', 'watch', 'reload'), () => {

}));

// gulp.task('default', ['sass', 'ejs', 'imgmin', 'copy', 'watch','reload'], () => {
// 	browserSync.init({
// 		server: {
// 			baseDir: "./app/product/"
// 		}
// 	});

//各種ファイル修正されたら自動更新する
/*
タスクの並列・直列処理化
*/
gulp.watch('app/src/sass/*.scss', gulp.task('sass'));
gulp.watch('app/src/**/*.html', gulp.task('html'));
gulp.watch(['app/product/*.html', '!node_modules'], gulp.task('reload'));
gulp.watch('app/src/js/*.js', gulp.task('script'));
gulp.watch(['app/src/ejs/parts/*.ejs', '!node_modules'], gulp.task('ejs'));
gulp.watch(['app/src/ejs/*.ejs', '!node_modules'], gulp.task('ejs'));

//gulp3.9までの書き方
// gulp.watch('app/src/sass/*.scss', gulp.task('sass'));
// gulp.watch('app/src/**/*.html', ['html']);
// gulp.watch(['app/product/*.html', '!node_modules'], ['reload']);
// gulp.watch('app/src/js/*.js', ['script']);
// gulp.watch(['app/src/ejs/parts/*.ejs', '!node_modules'], ['ejs']);
// gulp.watch(['app/src/ejs/*.ejs', '!node_modules'], ['ejs']);
