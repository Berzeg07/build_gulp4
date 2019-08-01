module.exports = function() {
    $.gulp.task('fonts', function() {
        return $.gulp.src('src/static/fonts/*/**')
            .pipe($.gulp.dest('build/fonts'))
    });
}
