'use strict';

const gulp = require('gulp');
let browserSync = require('browser-sync').create();
const runSequence = require('run-sequence'); //タスクの順次実行
let config = require('../config');

gulp.task("default", callback => {
  gulp
    .src(
      [
        "dev/**/*.html",
        "dev/css/**",
        "dev/js/**",
        "dev/ejs/**",
        "dev/images/**",
        "dev/readme"
      ],
      {
        base: "dev"
      }
    )
    .pipe(gulp.dest("release"));

  gulp.watch("dev/**/*.scss", ["sass"]);
  gulp.watch("dev/**/*.html", ["html"]);
  gulp.watch("dev/**/*.js", ["babel"]);
  gulp.watch("dev/**/*.js", ["script"]);
  // 順次実行したいものを左から順に指定する
  return runSequence(
    'html',
    ['ejs', 'script', 'babel', 'copy', 'sass'],
    'server',
    callback
  );
});
