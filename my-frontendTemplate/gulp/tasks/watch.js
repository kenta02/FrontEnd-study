let gulp = require('gulp');
let watch = require('gulp-watch');
let config = require('../config').watch;

gulp.task('watch', ()=> {
    // js
    watch(config.webpack, function () {
        gulp.start(['webpack']);
    });

    // css
    watch(config.sass, function () {
        gulp.start(['sass']);
    });
}); 