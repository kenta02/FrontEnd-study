'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const notify = require('gulp-notify'); //デスクトップ通知を行う
const plumber = require('gulp-plumber'); //Stream中に起こるのエラーが原因でタスクが強制停止することを防止する
const cleanCSS = require('gulp-clean-css'); //gulpでcssを圧縮する
require('es6-promise').polyfill();
const frontnote = require('gulp-frontnote');
const cssComb = require('gulp-csscomb'); //cssプロパティ順序
const csslint = require('gulp-csslint');
const cmq = require('gulp-merge-media-queries');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const sassGlob = require('gulp-sass-glob'); //*を使って複数のSassファイルを一括で読み込む
const autoprefixer = require('autoprefixer'); //ベンダープレフィックスを付与する
const postcss = require('gulp-postcss');
const flexBugsFixes = require('postcss-flexbugs-fixes'); //IEのflexバグ対応
const cssWring = require('csswring');


const paths = {
	css: {
		src: 'app/src/sass/*.scss',
		dest: 'app/product/css/'
	}
}

const options = {
	outputStyle: 'expanded',
	sourceMap: true, //圧縮の際に役立つソースマップを出力する
	sourceComments: true //出力ファイルに、sassファイルの何行目のことかを記述する
};
const autoprefixerOptions = {
	browsers: ['last 2 version', 'iOS >= 8.1', 'Android >= 4.4'],
	cascade: false,
	grid: true

};

const postcssOption = [
	flexBugsFixes,
	autoprefixer(autoprefixerOptions),
	cssWring
]

/*出力するファイルの指定*/
gulp.task('sass', () => {
	//streamをreturnする
	return gulp.src([paths.css.src, '!app/src/sass/_**/*']) //_から始まるsassファイルを対象外にする
		.pipe(plumber({
			errorHandler: notify.onError('Error: <%= error.message %>')
		})) //デスクトップ通知を行う
		.pipe(frontnote({
			out: 'docs/css'
		}))
		.pipe(sassGlob()) //sassの@omportにおけるglobを有効にする

		.pipe(sass(options)) //sassを実行

		// .pipe(postcss([
		// 	postcssOption
		// ]))	
		.pipe(cleanCSS({
			advanced: false
		})) //cssの圧縮
		.pipe(sourcemaps.write('/app/product/maps/'))
		.pipe(cmq({
			log: true
		}))

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
		// .pipe(gulp.dest('app/product/css/'))
		.pipe(gulp.dest(paths.css.dest))
		.pipe(browserSync.stream());
});
