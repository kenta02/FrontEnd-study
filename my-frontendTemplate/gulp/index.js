'use strict';
let gulp = require('gulp');
let requireDir = require('require-dir');
let browserSync = require("browser-sync").create();
let runSequence = require('run-sequence'); 
requireDir('./gulp/tasks', { 'resource': true });

