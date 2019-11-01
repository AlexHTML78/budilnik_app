var gulp = require('gulp'), //Подключаем Gulp
    browserSync = require('browser-sync'), // Подключаем Browser Sync // Подключаем UglifyJS // Подключаем CSS Minify
    sass = require('gulp-sass');

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'app/' // Директория для сервера - src
        },
        notify: false // Отключаем уведомления
    });
});

sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('src/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css/'));
});
 
gulp.task('sass watch', function () {
  gulp.watch('src/sass/*.sass', ['sass']);
});

gulp.task('watch', ['browser-sync', 'sass watch'], function() {
    // Наблюдение за js и html файлами, моментальное отображение изменений
    gulp.watch('src/sass/*.sass', browserSync.reload);
    gulp.watch('/*.js', browserSync.reload);
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за html файлами
});

