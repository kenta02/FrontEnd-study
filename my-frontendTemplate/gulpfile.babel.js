"use strict";
const gulp = require("gulp");
const sass = require("gulp-sass"); //cssコンパイル
const autoprefixer = require("gulp-autoprefixer");
require("es6-promise").polyfill();
const frontnote = require("gulp-frontnote");
const minifyCss = require("gulp-minify-css");
const cssComb = require("gulp-csscomb"); //cssプロパティ順序
const csslint = require("gulp-csslint");
const cache = require("gulp-cached");
const cmq = require("gulp-merge-media-queries");
const sourcemaps = require("gulp-sourcemaps");

const htmlhint = require("gulp-htmlhint");
const ejs = require("gulp-ejs");
const rename = require("gulp-rename");
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const browserSync = require("browser-sync");

// ejsをhtmlに変換
gulp.task("ejs", () => {
  return gulp
    .src(
      ["dev/ejs/**/*.ejs", "!" + "dev/ejs/**/_*.ejs"] //参照するディレクトリ、出力を除外するファイル
    )
    .pipe(ejs())
    .pipe(rename({ extname: ".html" })) //拡張子をhtmlに
    .pipe(gulp.dest("dev/"))　//出力先

       .pipe(browserSync.stream());
});

gulp.task("default", ["sass", "browser-sync", "ejs", "watch"]);

//sassとpugの監視をして変換処理させる
gulp.task("watch", () => {
  gulp.watch(["./dev/sass/**"], () => {
    gulp.start(["sass"]);
  });
  gulp.watch(["./dev/ejs/**"], () => {
    gulp.start(["ejs"]);
  });
});


// SASSをCSSに変換するタスク----------------------------
// gulp.task([第1引数：タスク名], [第2引数：タスクで行う処理])
gulp.task("sass", () => {
  gulp
    .src("./sass/**/*scss")
    .pipe(
      plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
      })
    )
    .pipe(sass())
    .pipe(gulp.dest("./css"))
    //reloadせずにinjectする
    .pipe(browserSync.stream());
});

const options = {
  outputStyle: "expanded",
  sourceMap: true,
  sourceComments: false
};
const autoprefixerOptions = {
  browsers: ["last 3 version", "iOS >= 8.1", "ie >= 8", "Android >= 4.4"],
  cascade: false
};

gulp.task("sass", () => {
  //出力するファイルの指定
  gulp
    .src(["dev/sass/*.scss", "!dev/sass/_**/*"])
    .pipe(
      plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
      })
    ) //
    .pipe(
      frontnote({
        out: "docs/css"
      })
    )
    .pipe(sourcemaps.init())
    .pipe(sass(options)) //sassを実行

    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(minifyCss({ advanced: false }))
    .pipe(sourcemaps.write("../maps"))
    .pipe(cmq({ log: true }))
    // .pipe(csslint()) //CSS構文チェック
    // .pipe(csslint.formatter())
    .pipe(cssComb())
    .pipe(gulp.dest("dev/css/"))
    .pipe(browserSync.stream())
    .pipe(
      notify({
        title: "Sassをコンパイルしました",
        message: new Date(),
        sound: "Glass",
        icon: "icons/logo.png"
      })
    )
    //reloadせずにinjectする
    .pipe(browserSync.stream()); //タスクが完了したら通知をしたいので、処理の一番最後にgulp-notify
});

//ブラウザ表示
gulp.task("server", () => {
  return browserSync.init({
    server:{
      baseDir:'./dev/'
    }
  })
  });
// 開発フォルダ➡本番用フォルダにコピー
gulp.task('copy', () => {
  gulp
    .src(['dev/**/*.html', 'dev/css/**', 'dev/js/**', 'dev/images/**'], {
      base: 'dev'
    })
    .pipe(gulp.dest('release'));
});

gulp.task('img', ()=> {
  gulp.src(['./dev/images/*png', './dev/images/*jpg', './dev/images/*jpeg'])
      .pipe(imagemin())
      .pipe(gulp.dest('./release/images')); //出力先
});



  gulp.task('watch',['server'],()=>{
    gulp.watch('./dev/sass/!(_)*.scss',['sass']);
    gulp.watch('./dev/*.html').on('change', function() {
      browserSync.reload()
    });
    gulp.watch(['./dev/ejs/parts/*.ejs', '!node_modules'], ['ejs']);
    gulp.watch(['./dev/ejs/*.ejs', '!node_modules'], ['ejs']);


  });

  gulp.task('default', ['server', 'sass', 'watch','ejs','copy','img']);