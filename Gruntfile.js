
'use strict';

module.exports = function(grunt) {

  // phonegap-grunt.js task use sample.

  grunt.loadNpmTasks('grunt-exec');

  grunt.initConfig({
    exec: {
      pwd: {
        command: 'pwd'
      }
    }
  });
  // Load npm tasks.
  grunt.loadTasks('tasks');
  grunt.registerTask('pwd', ['exec:pwd']);

};
