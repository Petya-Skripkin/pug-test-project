module.exports = function() {
  $.gulp.task("img", function() {
    return $.gulp.src("assets/images/*.{png,jpg,gif,svg}")
      .pipe($.gulp.dest("build/img"))
  });
}
