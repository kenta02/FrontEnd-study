const gulp = require('gulp');
const babel = require('gulp-babel');
const beautify = require('gulp-beautify');
const beautifyOptions = {
	indent_size: 2,
	indent_char: " ",
	eol: '\n',
	end_with_newline: true
};
gulp.task('babel', function() {
	gulp.src('app/src/js/app.js')
		.pipe(babel({
			presets: ['babelenv']
		}))
		.pipe(beautify(beautifyOptions))
		.pipe(gulp.dest('app/product/js'));
});