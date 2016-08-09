
'use strict';

module.exports = function(grunt) {

  // phonegap-grunt.js task use sample.

  grunt.loadNpmTasks('grunt-exec');

  grunt.initConfig({
    phonegap_grunt: {
      init: {
        path: '/user/sample',
        id: 'hoge.hoge',
        name: 'name_sample'
      },
      build: {
        platform: ['android', 'ios']
      },
      run: {
        platform: 'android'
      },
      clean: {
        platform: ['android', 'ios']
      }
    }
  });
  // Load npm tasks.
  grunt.loadTasks('tasks');
  grunt.registerTask('pwd', ['exec:pwd']);

};
