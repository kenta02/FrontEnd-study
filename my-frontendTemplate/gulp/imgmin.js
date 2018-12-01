/**
 * 画像を圧縮する
 */

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require("imagemin-pngquant");
const mozjpeg = require('imagemin-mozjpeg');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const imagePath = {
	src: 'app/src/images/',
	dist: 'app/product/images/'
}

gulp.task('imgmin', () => {
	gulp.src([imagePath.src + '*png', imagePath.src + '*jpg', imagePath.src + '*jpeg'])
		.pipe(plumber({
			errorHandler: notify.onError("Error: <%= error.message %>")
		}))
		.pipe(imagemin([
			pngquant({
				quality: '65-80',
				speed: 1,
				floyd: 0
			}),
			mozjpeg({
				quality: 85,
				progressive: true
			}),
			imagemin.svgo(),
			imagemin.optipng(),
			imagemin.gifsicle()
		]))
		.pipe(gulp.dest(imagePath.dist)) //出力先
		.pipe(
			notify({
				title: "画像の圧縮が完了しました",
				message: new Date(),
				sound: "Glass",
				icon: "logo.png" //好きなアイコンを設定する
			})
		);

});