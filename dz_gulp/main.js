// Load plugins
var gulp = require('gulp'),
    // sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    htmlmin = require('gulp-htmlmin')
    // cache = require('gulp-cache'),
 

// html
gulp.task('html', () => {
    return gulp.src('*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('build'));
  });

// Styles
gulp.task('styles', function() {
  return gulp.src('*.css')
    // .pipe(sass({ style: 'expanded', }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('build/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('build/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src('*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Images
gulp.task('images', function() {
  return gulp.src('assets/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('build/img'))
    .pipe(notify({ message: 'Images task complete' }));
});



// Default task
gulp.task('default', gulp.series('html', 'styles', 'scripts', 'images'));





function changeBlockTickets(){
    document.getElementById('overview_area').style.display = 'none';
    document.getElementById('tickets_area').style.display = 'block';
    document.getElementById('tickets_active').style.display = 'block';
    document.getElementById('tickets').style.display = 'none';
    document.getElementById('overview').style.display = 'none';
    document.getElementById('overview_inactive').style.display = 'block';
}


function changeBlockOverview(){
    document.getElementById('overview_area').style.display = 'block';
    document.getElementById('tickets_area').style.display = 'none';
    document.getElementById('tickets_active').style.display = 'none';
    document.getElementById('tickets').style.display = 'block';
    document.getElementById('overview').style.display = 'block';
    document.getElementById('overview_inactive').style.display = 'none';
}