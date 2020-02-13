module.exports = function() {
    $.gulp.task('sass', function(){
        return $.gulp.src('src/static/css/main.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.autoprefixer({
                browsers: ['last 10 versions']
            }))
            .on("error", $.gp.notify.onError({
                message: "Error: <%= error.message %>",
                title: "style"
            }))
            // .pipe($.gp.csso())
            .pipe($.gp.sass({outputStyle: 'expanded'}))
            // .pipe($.gp.sourcemaps.write('./'))
            .pipe($.gulp.dest('build/css/'))
            // Минифицированная версия
            .pipe($.gp.sass({outputStyle: 'compressed'}))
            .pipe($.gp.rename('main.min.css'))
            .pipe($.gp.sourcemaps.write('./'))
            .pipe($.gulp.dest('build/css/'))

            .pipe($.bs.reload({
                stream:true
            }));
    });
}
