'use strict';
const gulp = require('gulp');
const browserSync = require('browser-sync');



gulp.task('bs-reload', () => {
    browserSync.reload();
})


gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "./app/product/"
        }
    })
})