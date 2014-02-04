var gulp = require("gulp"),
	less = require('gulp-less'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	usemin = require('gulp-usemin');

//var plugins = require("gulp-load-plugins")();

gulp.task('styles', function(){
	return gulp.src('app/styles/style.less')
		.pipe(less())
		.pipe(autoprefixer('last 10 version'))
		.pipe(minifycss())
		.pipe(gulp.dest('dist/styles'))
});

gulp.task('scripts', function(){
	return gulp.src('app/scripts/**/*.js')
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('default'))

});

gulp.task('images', function(){
	return gulp.src('app/images/**/*.jpg')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
});

gulp.task('copy-icons', function(){
	gulp.src('app/styles/icons/*')
	.pipe(gulp.dest('dist/styles/icons'))
});

gulp.task('copy-blank', function(){
	gulp.src('app/images/blank.gif')
	.pipe(gulp.dest('dist/images'))
});

gulp.task('copy-favicon', function(){
	gulp.src('app/favicon.ico')
	.pipe(gulp.dest('dist'))
});

gulp.task('usemin', function(){
	gulp.src('app/index.html')
		.pipe(usemin())
		.pipe(gulp.dest('dist/'));
});

gulp.task('clean', function(){
	return gulp.src(['dist/'], {read: false})
		.pipe(clean());
});

gulp.task('copy', function(){
	gulp.start('copy-blank', 'copy-favicon', 'copy-icons');
});

gulp.task('default', ['clean'], function(){
	gulp.start('images', 'scripts','styles','usemin', 'copy');
});

gulp.task('copy', function(){
	gulp.start('copy-blank', 'copy-favicon', 'copy-icons');
});