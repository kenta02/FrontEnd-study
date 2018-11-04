'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const notify = require('gulp-notify');//デスクトップ通知を行う
const plumber = require('gulp-plumber');//Stream中に起こるのエラーが原因でタスクが強制停止することを防止する
const cleanCSS = require('gulp-clean-css');//gulpでcssを圧縮する
require('es6-promise').polyfill();
const frontnote = require('gulp-frontnote');
const cssComb = require('gulp-csscomb'); //cssプロパティ順序
const csslint = require('gulp-csslint');
const cmq = require('gulp-merge-media-queries');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const sassGlob = require('gulp-sass-glob'); //*を使って複数のSassファイルを一括で読み込む
// const browserSync = require('browser-sync').create();
const options = {
	outputStyle: 'compressed',
	sourceMap: true, //圧縮の際に役立つソースマップを出力する
	sourceComments: false //出力ファイルに、sassファイルの何行目のことかを記述する
};


const autoprefixerOptions = {
	browsers: ['last 2 version', 'iOS >= 8.1', 'Android >= 4.4'],
	cascade: false

};

/*出力するファイルの指定*/
gulp.task('sass',()=> {
	//streamをreturnする
	return gulp.src(['app/src/sass/*.scss', '!app/src/sass/_**/*']) //_から始まるsassファイルを対象外にする
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')})) //デスクトップ通知を行う
		.pipe(frontnote({out: 'docs/css'}))
		.pipe(sassGlob()) //sassの@omportにおけるglobを有効にする
		.pipe(sass(options)) //sassを実行
		.pipe(autoprefixer({autoprefixerOptions}))
		.pipe(cleanCSS({advanced: false})) //cssの圧縮
		.pipe(sourcemaps.write('../maps'))
		.pipe(cmq({log: true}))

		//デフォルトはoff
		// .pipe(csslint()) //CSS構文チェック
		// .pipe(csslint.formatter())

		.pipe(cssComb()) //cssプロパティを整形する
		.pipe(sourcemaps.init())

		.pipe(
			notify({
				title: 'Sassをコンパイルしました',
				message: new Date(),
				sound: 'Glass',
				icon: 'logo.png'
			})
		)
		.pipe(gulp.dest('app/product/css/'))
		.pipe(browserSync.stream());
});

















