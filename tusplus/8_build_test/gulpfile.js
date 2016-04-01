var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var open = require('gulp-open');
var browserify = require('gulp-browserify');
var port = process.env.port || 3031;

/*
#gulp-browserify
browserify 에서 bundle()을 수행한 뒤 반환해 주는 Readable stream -> vinyl object로 변환 해주는 장치
현재 블랙리스트 : http://programmingsummaries.tistory.com/382
*/



gulp.task('browserify', function() {
  gulp.src('./src/app.js')
    .pipe(browserify({ transform: 'reactify' }))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('open', function() {
  var opts = {
    url: "http://localhost:"+port
  };
  gulp.src('index.html')
    .pipe(open('', opts));
});

gulp.task('connect', function() {
  connect.server({
    root: '',
    port: port,
    livereload: true
  })
});

gulp.task('js', function() {
  gulp.src('./dist/*.js')
    .pipe(connect.reload());
});

gulp.task('html', function() {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('./dist/*.js', ['js']);
  gulp.watch('./index.html', ['html']);
  gulp.watch('./src/*.js', ['browserify']);
});

gulp.task('default', ['browserify']);
gulp.task('serve', ['browserify', 'connect', 'open', 'watch']);
