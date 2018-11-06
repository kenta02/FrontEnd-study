'use strict';
const gulp = require('gulp');
const browserSync = require('browser-sync');
const notify = require('gulp-notify');



gulp.task('browser-sync', () => {
    browserSync.init({
        server: "./app/product"
    });
});

gulp.task('reload', () => {
    browserSync.reload();
});

// ファイルの変更を監視する
gulp.task('watch', () => {
    gulp.watch(['app/src/sass/**'], () => {
        gulp.task(['sass']);
    });
    gulp.watch(['app/src/ejs/**'], () => {
        gulp.task(['ejs']);
    });

    gulp.watch('app/src/sass/**', gulp.series('sass'))

    gulp.watch('app/src/sass/*.scss', gulp.series('sass'))
    gulp.watch('app/src/sass/*.scss', gulp.series('sass'))
    gulp.watch('app/src/**/*.html', gulp.series('html'))
    gulp.watch(['app/product/*.html', '!node_modules'], gulp.series('reload'))
    gulp.watch('app/src/js/*.js', gulp.series('script'))
    gulp.watch(['app/src/ejs/**', '!node_modules'], gulp.series('ejs'))
    gulp.watch(['app/src/ejs/parts/*.ejs', '!node_modules'], gulp.series('ejs'))
    gulp.watch(['app/src/ejs/*.ejs', '!node_modules'], gulp.series('ejs'))


    // gulp.watch(['app/src/sass/**'], gulp.task(['sass']));

    // gulp.watch('app/src/sass/*.scss', gulp.task('sass'));
    // gulp.watch('app/src/sass/*.scss', gulp.task('sass'));
    // gulp.watch('app/src/**/*.html', gulp.task('html'));
    // gulp.watch(['app/product/*.html', '!node_modules'], gulp.task('reload'));
    // gulp.watch('app/src/js/*.js', gulp.task('script'));


    // gulp.watch(['app/src/ejs/**', '!node_modules'], gulp.task('ejs'));
    // gulp.watch(['app/src/ejs/parts/*.ejs', '!node_modules'], gulp.task('ejs'));
    // gulp.watch(['app/src/ejs/*.ejs', '!node_modules'], gulp.task('ejs'));




    // .pipe('app/src/sass/*.scss', gulp.task('sass')
    // .pipe('app/src/**/*.html', gulp.task('html'))
    // .pipe(['app/product/*.html', '!node_modules'], gulp.task('reload'))
    // .pipe('app/src/js/*.js', gulp.task('script'))
    // .pipe(['app/src/ejs/parts/*.ejs', '!node_modules'], gulp.task('ejs'))
    // .pipe(['app/src/ejs/*.ejs', '!node_modules'], gulp.task('ejs')




});
