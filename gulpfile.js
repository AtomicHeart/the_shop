const gulp          = require('gulp');
const less          = require('gulp-less');
const browserSync   = require('browser-sync');
const autoprefixer  = require('gulp-autoprefixer');
const rename        = require('gulp-rename');
const ejs           = require('gulp-ejs');
const gutil         = require('gulp-util');
const sourcemaps    = require('gulp-sourcemaps');
const imagemin      = require('gulp-imagemin');
const include       = require('gulp-include');
const gulpIf        = require('gulp-if');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

console.log(process.env.NODE_ENV);

gulp.task('styles', () => {
    gulp.src('src/less/main.less')
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('img', () => {
    gulp.src('src/img/**/*.*')
        .pipe(gulpIf(isDevelopment, imagemin()))
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('js', () => {
    gulp.src('src/js/**/*.*')
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('html', () => {
    gulp.src('src/index.ejs')
    .pipe(ejs().on('error', gutil.log))
    .pipe(include()).on('error', console.log)
    .pipe(rename('index.html'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('livereload', () => {
    browserSync.create();

    browserSync.init({
        server: {
            baseDir: 'dist'
        },
        files: [
            'dist/**/*.*'
        ]
    });
});

gulp.task('watch', () => {
    gulp.watch('src/less/**/*.less', ['styles']);
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/**/*.ejs', ['html']);
    gulp.watch('src/img/**/*.*', ['img']);
    gulp.watch('src/js/**/*.*', ['js']);
});

gulp.task('default', ['styles', 'html', 'img', 'js', 'livereload', 'watch']);
gulp.task('prod', ['styles', 'html', 'img', 'js']);
