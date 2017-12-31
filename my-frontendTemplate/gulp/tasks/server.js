const gulp = require('gulp');
let browserSync = require('browser-sync').create();
let runSequence = require('run-sequence'); 
let config = require('../config');


gulp.task('server', () => {
   return browserSync.init({
      server: {
        baseDir: config.server.dest
      }
    });
  });