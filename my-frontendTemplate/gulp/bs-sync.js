'use strict';
const gulp = require('gulp');
const browserSync = require('browser-sync');
const notify = require('gulp-notify');


gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir:"./app/product"
        }
    });
});

gulp.task('bs-reload', () => {
    browserSync.reload();
});

const watchPaths = [
    '../app/src/sass/**',
    '../app/src/ejs/*.ejs'

]


// ファイルの変更を監視する
gulp.task('watch', () => {
 
    
    gulp.watch((watchPaths),()=>{
        gulp.series('sass','ejs');
    })

    gulp.watch(watchPaths,['bs-reload'])

 
    // gulp.watch(['app/src/sass/**'], () => {
    //     gulp.task(['sass']);
    // });
    // gulp.watch(['app/src/ejs/**'], () => {
    //     gulp.task(['ejs']);
    // });




    // gulp.watch('app/src/sass/**', gulp.series('sass'))
    // gulp.watch('app/src/sass/*.scss', gulp.series('sass'))
    // gulp.watch('app/src/**/*.html', gulp.series('html'))
    // gulp.watch(['app/product/*.html', '!node_modules'], gulp.series('reload'))
    // gulp.watch('app/src/js/*.js', gulp.series('script'))
    // gulp.watch(['app/src/ejs/**', '!node_modules'], gulp.series('ejs'))
    // gulp.watch(['app/src/ejs/parts/*.ejs', '!node_modules'], gulp.series('ejs'))
    // gulp.watch(['app/src/ejs/*.ejs', '!node_modules'], gulp.series('ejs'))

});
