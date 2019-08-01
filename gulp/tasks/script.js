module.exports = function() {
    // Обработка файлов библиотек и конкатенация в один js файл
    // $.gulp.task('scripts:lib', function() {
    //     return $.gulp.src(['src/static/libs/autosize/autosize.min.js', 'node_modules/jquery/dist/jquery.min.js'])
    //     .pipe($.gp.concat('libs.min.js'))
    //     .pipe($.gulp.dest('build/static/js/'))
    //     .pipe($.bs.reload({
    //         stream: true
    //     }));
    // });
    // Обработка файлов библиотек и перенос в build в исходном виде
    $.gulp.task('scripts:lib', function() {
        return $.gulp.src('src/static/libs/*/**')
        .pipe($.gulp.dest('build/libs/'))
        .pipe($.bs.reload({
            stream: true
        }));
    });
    // Перенос файла common.js в папку build
    $.gulp.task('scripts', function() {
        return $.gulp.src('src/static/js/common.js')
        .pipe($.gulp.dest('build/js/'))
        .pipe($.bs.reload({
            stream: true
        }));
    });

};
