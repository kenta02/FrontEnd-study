/**
 * ファイルを移動（複製）する
 * src => 開発フォルダ
 * public => 本番用フォルダ
 */

'use strict';
const gulp = require('gulp');


gulp.task('copy', ()=> {
	gulp.src(['app/src/images/**'])
		.pipe(gulp.dest('app/product/images'));
});