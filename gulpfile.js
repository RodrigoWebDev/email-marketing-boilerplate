var gulp = require("gulp");
var clean = require("gulp-clean");
var imagemin = require("gulp-imagemin");
var inlineCss = require("gulp-inline-css");
var htmlmin = require("gulp-inline-css");


gulp.task("default", ["copy"], function () {
    gulp.start("imagemin", "inline-css", "htmlmin");
});

gulp.task("copy", ["clean"], function () {
    return gulp.src("src/**/*")
        .pipe(gulp.dest("dist"));
});

gulp.task("clean", function () {
    return gulp.src("dist")
        .pipe(clean());
});

gulp.task("imagemin", function () {
    return gulp.src("src/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img/"));
});

gulp.task("htmlmin", function () {
    return gulp.src("dist/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist"));
});

gulp.task("inline-css", function () {
    return gulp.src('src/*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('dist/'));
});