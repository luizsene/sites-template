'use strict';

const gulp = require('gulp');
var concat = require('gulp-concat');
const minify = require('gulp-minify');

var paths = {
    css: [],
    js: [
        //'./js/jquery-min.js',
        './js/jquery.appear.js',
        './js/jquery.magnific-popup.min.js',
        './js/jquery.themepunch.revolution.min.js',
        './js/jquery.themepunch.tools.min.js',
         './js/bootstrap.min.js ',
        './js/revolution.extension.layeranimation.min.js',
        './js/revolution.extension.slideanims.min.js',
        './js/revolution.extension.parallax.min.js',
        './js/imagesloaded.pkgd.min.js',
        './js/owl.carousel.min.js',
        './js/main.js'
    ]
};

gulp.task('minify', function () {
    return gulp.src(paths.js)
        .pipe(concat('bundle.js'))
        .pipe(minify({
            ext: {
                src: '.js',
                min: '.min.js'
            },
            exclude: [],
            ignoreFiles: ['-min.js']
        }))
        .pipe(gulp.dest('./bundle/'));
});
