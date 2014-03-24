// require gulp and plugins
var gulp = require( 'gulp' ),
	autoprefix = require('gulp-autoprefixer'),
	compass = require( 'gulp-compass' ),
	livereload = require( 'gulp-livereload' ),
	watch = require( 'gulp-watch' );

gulp.task( 'default', function() {
	gulp.src( 'scss/style.scss' )
		.pipe( watch() )
		.pipe( compass({
			config_file: './config.rb',
			css: './',
			sass: 'scss'
		}) )
		.pipe( autoprefix( 'last 3 versions' ) )
		.pipe( gulp.dest( './') )
		.pipe( livereload() );
});