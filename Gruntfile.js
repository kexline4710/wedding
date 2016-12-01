module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    exec: {
      server: {
        command: "rails server"
      },
      test: {
        command: "rspec"
      }
    }
  });

  // Load npm tasks
  grunt.loadNpmTasks('grunt-exec');

  // Register tasks
  grunt.registerTask('default', 'Default task', function() {
    grunt.log.write('This is your default task').ok();
  });

  grunt.registerTask('server', ['exec:server'])
  grunt.registerTask('test', ['exec:test'])
}
