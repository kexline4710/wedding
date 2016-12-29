var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var setupWatchers = function() {
  gulp.watch(['./app/views/**/*.erb',
              './app/assets/javascripts/**/*.js'], ['reload']);
  gulp.watch(['./app/assets/stylesheets/**/*.scss'], ['reloadCSS'])
};

gulp.task('reload', function(){
  return browserSync.reload();
});

gulp.task('reloadCSS', function() {
  return browserSync.reload('*.css');
});

gulp.task('init', function() {
  browserSync.init({
      proxy: 'localhost:7999',
      port: 8000,
      open: false,
      ui: {
        port: 8001
      }
  });

  setupWatchers();
});

gulp.task('default', ['init']);
