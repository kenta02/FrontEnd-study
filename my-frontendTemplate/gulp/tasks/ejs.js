'use strict';
let gulp = require('gulp');
let ejs = require('gulp-ejs');
let rename = require('gulp-rename');
var runSequence = require("run-sequence"); //タスクの順次実行
let config = require('../config');
// ejsをhtmlに変換
gulp.task('ejs', () => {
  return gulp
    .src(config.ejs.src)
    .pipe(ejs())
    .pipe(rename({ extname: '.html' })) //拡張子をhtmlに
    .pipe(gulp.dest(config.ejs.dest)); //出力先
});


// gulp.task("ejs", () => {
//   return gulp
//     .src(
//       ["dev/ejs/**/*.ejs", "!" + "dev/ejs/**/_*.ejs"] //参照するディレクトリ、出力を除外するファイル
//     )
//     .pipe(ejs())
//     .pipe(rename({ extname: ".html" })) //拡張子をhtmlに
//     .pipe(gulp.dest("dev/")); //出力先
// });
