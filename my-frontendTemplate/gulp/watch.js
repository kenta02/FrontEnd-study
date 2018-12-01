'use strict';
const gulp = require('gulp');
const browserSync = require('browser-sync');
const notify = require('gulp-notify');


// ファイルの変更を監視する
gulp.task('watch', () => {

    //開発フォルダのsassが変更されるとsassコマンドを実行する
    gulp.watch('app/src/sass/**', gulp.parallel('sass')); 

    //開発フォルダのjsが変更されるとj自動更新する
    gulp.watch('app/src/js/*.js', gulp.parallel('script')).on('change', () => {
        browserSync.reload();
    });
    //開発フォルダのejsが変更されると自動更新する
    gulp.watch(['./app/src/ejs/*.ejs', '!node_modules'], gulp.parallel('ejs')).on('change', () => {
        browserSync.reload();
    });


})
