'use strict';
const gulp = require('gulp');
const ftp = require('vinyl-ftp');

gulp.task('ftp',()=>{
    const ftpConfig = {
        host:'gulp.gulp.jp', //FTPSサーバー
        user:'gulp',//FTP・WebDAVアカウント
        password:'gulp'//FTP・WebDAVパスワード
    }

    const connect = ftp.create(ftpConfig);
    const ftpUploadFiles = '../app/product/**';
    const remoteDistDir = 'public_html'

    return gulp.src(ftpUploadFiles)
    .pipe(connect.dest(remoteDistDir))
})


