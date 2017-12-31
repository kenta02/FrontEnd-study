"use strict";
let gulp = require("gulp");
let runSequence = require("run-sequence");
let babel = require("gulp-babel");
let babelpreset = require("babel-preset-es2015");
let eslint = require("gulp-eslint");
let eslintreact = require("eslint-plugin-react");
let beautify = require("gulp-beautify");
let config = require('../config');

// gulp.task("babel", () => {
//     gulp
//       .src("dev/js/app.js")
//       .pipe(
//         babel({
//           presets: ["es2015"]
//         })
//       )
//       .pipe(beautify(beautifyOptions)) //destを実行する前に記述
//       // .pipe(uglify())
//       .pipe(gulp.dest("release/js/"));
//   });
gulp.task('babel', () => {
   return gulp
      .src(config.babel.src)
      .pipe(
        babel({
          presets: ['es2015']
        })
      )
      .pipe(beautify(config.script.beautifyOptions)) //destを実行する前に記述
      // .pipe(uglify())
      .pipe(gulp.dest(config.babel.
        dest));
  });