// @file sass.js
'use strict';
let gulp = require('gulp');
let sass = require('gulp-sass'); //cssコンパイル
let autoprefixer = require('gulp-autoprefixer');
//if node version is lower than v.0.1.2
require('es6-promise').polyfill();
let frontnote = require('gulp-frontnote');
let minifyCss = require('gulp-minify-css');
let cssComb = require('gulp-csscomb'); //cssプロパティ順序
let csslint = require('gulp-csslint');
let cache = require('gulp-cached');
let cmq = require('gulp-merge-media-queries');
let browserSync = require('browser-sync').create();
let notify = require('gulp-notify');
let plumber = require('gulp-plumber');
let sourcemaps = require('gulp-sourcemaps');   // タスク高速化のためにキャッシュ使用
let config = require('../config');


gulp.task('sass', () => {
  //出力するファイルの指定
  gulp
  // .src(["dev/sass/*.scss", "!dev/sass/_**/*"])
  .src(config.sass.src)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(cache('sass'))
    .pipe(frontnote({out: 'docs/css'}))
    .pipe(sourcemaps.init())
    .pipe(sass(config.sass.Options)) //sassを実行
    // .pipe(concat(config.output))
    .pipe(autoprefixer(config.sass.autoprefixer))
    .pipe(minifyCss({ advanced: false }))
    .pipe(sourcemaps.write('../maps'))
    .pipe(cmq({ log: true }))
    // .pipe(csslint())
    // .pipe(csslint.formatter())
    .pipe(cssComb())
    // .pipe(gulp.dest('dev/css'))//出力する
    .pipe(gulp.dest(config.sass.output))//cssファイルの出力先の指定
    .pipe(browserSync.stream())
    .pipe(
      notify({
        title: 'Sassをコンパイルしました',
        message: new Date(),
        sound: 'Glass',
        icon: 'icons/logo.png'
      })
    ); //タスクが完了したら通知をしたいので、処理の一番最後にgulp-notify
});
