/**
 * ejsファイルをHTMLファイルに変換する
 */

const gulp = require('gulp');
const ejs = require('gulp-ejs');
//fsファイルの読み込み
const fs = require( 'fs' );
const rename = require("gulp-rename");
const notify = require('gulp-notify'); //デスクトップ通知を行う
const plumber = require('gulp-plumber'); //Stream中に起こるのエラーが原因でタスクが強制停止することを防止する
const browserSync = require('browser-sync').create();
const datas = {
	title: 'ここにタイトル'
};

const paths = {
	ejs: {
		src: './app/src/ejs/**.ejs',
		dest: './app/product/'
	}
}

// ejsをhtmlに変換
gulp.task("ejs", () => {
	return gulp.src([paths.ejs.src, '!' + 'app/src/ejs/parts/_*.ejs']) //_から始まるejsファイルを対象外にする
		.pipe(ejs(datas))
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')})) //デスクトップ通知を行う
		.pipe(rename({
			extname: ".html"
		})) //拡張子をhtmlに
		.pipe(
			notify({
				title: 'ejsファイルをコンパイルしました',
				message: new Date(),
				sound: 'Glass',
				icon: 'logo.png'
			})
		)
		.pipe(gulp.dest(paths.ejs.dest)) //出力先
		.pipe(browserSync.stream());
});