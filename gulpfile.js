// Include gulp
var gulp = require('gulp'),
		sass = require('gulp-sass'),
		rename = require('gulp-rename'),
		cleanCss = require('gulp-clean-css'),
		config = {
			sourceSass: 'source/stylesheets/*.scss', // where we can find the main Sass file
			minDir: 'build/minified', // where we want to keep the minified CSS
			buildStylesDir: 'build/stylesheets' // where the CSS from Sass lives
		};


// Compile Our Sass
gulp.task('sass', function() {
	return gulp.src(config.sourceSass)
		.pipe(sass())
		.pipe(gulp.dest(config.buildStylesDir));
});


// Minify the CSS
gulp.task('minify-css', function () {
    gulp.src(config.buildStylesDir + '/*.css') // path to your file, e.g. 'build/stylesheets/main.css'
    .pipe(cleanCss({debug: true}, (details) => {
      console.log(`${details.name}: Original Size: ${details.stats.originalSize}`);
      console.log(`${details.name}: Minified Size: ${details.stats.minifiedSize}`);
    }))
		.pipe(rename({
			suffix: '.min'
		})) // include .min in the filename, e.g. 'main.min.css'
    .pipe(gulp.dest(config.minDir));
});


// Watch Files For Changes 
// and Run Job(s) When Change Detected
gulp.task('watch', function() {
	gulp.watch(config.sourceSass, ['sass', 'minify-css']);
});


// Default Task(s): 
// Run all of these when calling `gulp default`
gulp.task('default', ['sass', 'minify-css']);
