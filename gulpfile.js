const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', () => {
    gulp.src('src/less/main.less')
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('img', () => {
    gulp.src('src/img/**/*.*')
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('js', () => {
    gulp.src('src/js/**/*.*')
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('html', () => {
    gulp.src('src/index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('livereload', () => {
    browserSync.create();

    browserSync.init({
        server: {
            baseDir: 'dist'
        },
        browser: 'google chrome',
        files: [
            'dist/**/*.*'
        ]
    });
});

gulp.task('watch', () => {
    gulp.watch('src/less/**/*.less', ['styles']);
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/img/**/*.*', ['img']);
    gulp.watch('src/js/**/*.*', ['js']);
});

gulp.task('default', ['styles', 'html', 'img', 'js', 'livereload', 'watch']);
gulp.task('prod', ['styles', 'html', 'img', 'js']);