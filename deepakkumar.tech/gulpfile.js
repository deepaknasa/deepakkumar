/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify");

var paths = {
    webroot: "./wwwroot/",
    src: "app/content/"
};

paths.cssSrc = paths.src + "css/**/*.css";
paths.cssDest = paths.webroot + "css/**/*.css";

gulp.task("clean", ["clean:css"]);

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("css", function () {
    return gulp.src([paths.cssSrc])
        .pipe(concat(paths.cssDest))
        .pipe(gulp.dest("."));
});