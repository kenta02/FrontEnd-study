'use strict';
const gulp = require("gulp");
const rename = require("gulp-rename");
const notify = require("gulp-notify");
const browserSync = require("browser-sync").create();
const plumber = require("gulp-plumber");
const babel = require("gulp-babel");
const babelpreset = require("babel-preset-es2015");
const eslint = require("gulp-eslint");
const eslintreact = require("eslint-plugin-react");
const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const beautify = require("gulp-beautify");


  
gulp.task("script", ()=> {
  gulp
    .src("dev/js/*.js")
    .pipe(
      plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
      })
    )
    .pipe(eslint({ useEslintrc: true }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(
      eslint.result(function(result) {
        if (result.errorCount !== 0) {
          return;
        }
        return gulp.src(result.filePath).pipe(gulp.dest("release/js/"));
      })
    )
    .pipe(browserSync.stream());
});