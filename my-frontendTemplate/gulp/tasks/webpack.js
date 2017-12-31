// @file webpack.js
let gulp = require('gulp');
let gulpif = require('gulp-if');
let uglify = require('gulp-uglify');
let webpack = require('gulp-webpack');
let config = require('../config');

// タスク名はファイル名と同じにしておくと見通しが良い
gulp.task('webpack', ()=> {
    gulp.src(config.webpack.entry)
        .pipe(webpack(config.webpack))
        .pipe(gulpif(config.js.uglify, uglify()))
        .pipe(gulp.dest(config.js.dest));
});