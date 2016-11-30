module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  // Default task
  grunt.registerTask('default', 'Default task', function() {
    grunt.log.write('This is your default task').ok();
  });

}
