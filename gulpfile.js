'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const minifyCss = require('gulp-minify-css');
const rename = require('gulp-rename');
const strip = require('gulp-strip-comments');
const removeEmptyLines = require('gulp-remove-empty-lines');

const paths = {
    css: [
        './public/css/*.css'
    ],

    js: [
        './public/js/jquery.min.js',
        './public/js/jquery.appear.min.js',
        './public/js/jquery.magnific-popup.min.js',
        './public/js/jquery.themepunch.revolution.min.js',
        './public/js/jquery.themepunch.tools.min.js',
        './public/js/bootstrap.min.js ',
        './public/js/revolution.extension.layeranimation.min.js',
        './public/js/revolution.extension.slideanims.min.js',
        './public/js/revolution.extension.parallax.min.js',
        './public/js/imagesloaded.pkgd.min.js',
        './public/js/owl.carousel.min.js',
        './public/js/masonry.pkgd.min.js',
        './public/js/isotope.pkgd.min.js',
        './public/js/main.min.js',
    ]
};

gulp.task('minify:js', function () {
    return gulp.src(paths.js)
        .pipe(concat('bundle.js'))
        .pipe(strip())
        .pipe(removeEmptyLines())
        .pipe(gulp.dest('./public/bundle/'));
});


gulp.task('minify:css', function(done) {
    gulp.src(paths.css)
        .pipe(concat('bundle.css'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./public/bundle/'))
        .on('end', done);
});
