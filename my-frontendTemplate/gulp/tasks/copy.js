"use strict";
let gulp = require("gulp");
let runSequence = require("run-sequence"); //タスクの順次実行
let config = require('../config').copy;

gulp.task("copy", ()=> {
        return gulp.src(["dev/images/**"]).pipe(gulp.dest("release/images"));
      });
