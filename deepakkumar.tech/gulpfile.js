/// <binding BeforeBuild='content' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify");

var paths = {
    webroot: "./wwwroot/",
    src: "./app/"
};

paths.srcFolder = paths.src + "assets/**/*";
paths.destFolder = paths.webroot + "assets/";

gulp.task("content", function () {
    return gulp.src([paths.srcFolder]).pipe(gulp.dest(paths.destFolder));
});