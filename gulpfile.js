const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

gulp.task("css", function () {
  return gulp
    .src("public/css/main.css")
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("public/css"));
});

gulp.task("default", gulp.series("css"));
