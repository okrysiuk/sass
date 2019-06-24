const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss to css
function style() {
	//1 where is my csss file
	return gulp.src('sass/**/*.sass')
	//pass that file through sass compiler
		.pipe(sass().on('error', sass.logError))
	//where do i save the compiled file
		.pipe(gulp.dest('css'))
	//stream changes to all browser
		.pipe(browserSync.stream());
}
function watch() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch('sass/**/*.sass', style);
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('js/**/*.js').on('change', browserSync.reload);
}
exports.style = style;
exports.watch = watch;

