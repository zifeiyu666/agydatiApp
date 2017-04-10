
var gulp = require('gulp'); 
var less = require('gulp-less');
var imagemin = require('gulp-imagemin');
var cssmin = require('gulp-clean-css');



gulp.task('less', function(){
    gulp.src('src/less/*')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'))
})


gulp.task('imagemin', function(){
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

gulp.task('sass', function() {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});


gulp.task('scripts', function() {
    gulp.src('./js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', function(){
    gulp.run('lint', 'sass', 'scripts');

    
});

gulp.task('watch',function(){
    gulp.watch('src/less/*', function(){
            gulp.run('less');
    });
})


