module.exports = function() {
  $.gulp.task("watch", function() {
      $.gulp.watch("assets/pages/*.pug",$.gulp.series("pug"));
      $.gulp.watch("assets/modules/**/*.pug",$.gulp.series("pug"));
      $.gulp.watch("assets/*.scss",$.gulp.series("sass"));
      $.gulp.watch("assets/modules/**/*.scss",$.gulp.series("sass"));
      $.gulp.watch("assets/images/*",$.gulp.series("img"));
  });
}
