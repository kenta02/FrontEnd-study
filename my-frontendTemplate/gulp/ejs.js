/**
 * ejsファイルをHTMLファイルに変換する
 */

const gulp = require('gulp');
const ejs = require('gulp-ejs');
const rename = require("gulp-rename");
const browserSync = require('browser-sync').create();
const datas = {
	title: 'ここにタイトル'
};

// ejsをhtmlに変換
gulp.task("ejs", () => {
	return gulp.src(['app/src/ejs/*.ejs', '!app/src/ejs/parts/_*.ejs'])//_から始まるejsファイルを対象外にする
		.pipe(ejs(datas))
		.pipe(rename({ extname: ".html" })) //拡張子をhtmlに
		.pipe(gulp.dest("app/product/"))　//出力先
		.pipe(browserSync.stream());
});