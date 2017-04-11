
var gulp = require('gulp'); 
var less = require('gulp-less');
var imagemin = require('gulp-imagemin');
var cssmin = require('gulp-clean-css');
var livereload = require('gulp-livereload'); 

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

    gulp.watch('src/less/*.less', ['less']);
    livereload.listen();//这里需要注意！旧版使用var server = livereload();已经失效    
    // app/**/*.* 的意思是 app 文件夹下的 任何文件夹 的 任何文件  
    gulp.watch('*.html', function(event) {  
        livereload.changed(event.path);  
    });
    gulp.watch('src/less/*.less', function(event) {  
        livereload.changed(event.path);  
    });  
})




