"use strict";
let gulp = require('gulp');
let htmlhint = require('gulp-htmlhint');
let browserSync = require("browser-sync").create();
var runSequence = require("run-sequence"); //タスクの順次実行
let config = require('../config');

gulp.task("html", () => {
  return gulp
    // .src("/dev/**/*.html")
    .src(config.src + '/**/*.html')
    .pipe(htmlhint(".htmlhintrc")) //引数に.htmlhintrcへのパスを指定する
    .pipe(htmlhint.reporter()) //reporter関数を使ってターミナルに実行結果を表示
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.stream());
});

// gulp.task("html", () => {
//   gulp
//     .src("/dev/**/*.html")
//     .pipe(htmlhint(".htmlhintrc")) //引数に.htmlhintrcへのパスを指定する
//     .pipe(htmlhint.reporter()) //reporter関数を使ってターミナルに実行結果を表示
//     .pipe(gulp.dest("release/"))
//     .pipe(browserSync.stream());
// });