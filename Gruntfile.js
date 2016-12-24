
'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
        all: [
            'Gruntfile.js',
            'tasks/*.js',
            '<%= nodeunit.tests %>'
        ],
        options: {
          jshintrc: '.jshintrc'
        }
    },
    clean: {
        tests: ['spec/tmp/*']
    },
    pg: {
      // Project create.
      init: {
        path: 'spec/tmp',
        id: 'sample.com',
        name: 'sample'
      },
      add: {
        path: 'spec/tmp',
        platform: ['android', 'ios']
      },
    },
    nodeunit: {
      tests: ['spec/*_spec.js']
    }
  });

  // Load tasks.
  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['clean', 'pg:init', 'pg:add', 'nodeunit']);
  // Default task: lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);
};
