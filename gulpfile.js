'use strict';

const gulp = require('gulp');
var concat = require('gulp-concat');
const minify = require('gulp-minify');
const minifyCss = require('gulp-minify-css');
const rename = require('gulp-rename');
const strip = require('gulp-strip-comments');

var paths = {
    css: [
        './css/*.css'
    ],

    js: [
        './js/jquery.min.js',
        './js/jquery.appear.min.js',
        './js/jquery.magnific-popup.min.js',
        './js/jquery.themepunch.revolution.min.js',
        './js/jquery.themepunch.tools.min.js',
        './js/bootstrap.min.js ',
        './js/revolution.extension.layeranimation.min.js',
        './js/revolution.extension.slideanims.min.js',
        './js/revolution.extension.parallax.min.js',
        './js/imagesloaded.pkgd.min.js',
        './js/owl.carousel.min.js',
        './js/main.min.js'
    ]
};

gulp.task('minify:js', function () {
    return gulp.src(paths.js)
        .pipe(concat('bundle.js'))
        .pipe(strip())
        .pipe(gulp.dest('./bundle/'));
});


gulp.task('minify:css', function(done) {
    gulp.src(paths.css)
        .pipe(concat('bundle.css'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./bundle/'))
        .on('end', done);
});
