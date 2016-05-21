
'use strict';

module.exports = function(grunt) {

  // Load npm tasks.
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-ect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({

    // Exec commands.
    exec: {
      // Initialize.
      init: {
        command: 'mkdir -p template/css && mkdir -p template/js'
      },
      // Exec for android.
      build_android: {
        command: 'phonegap cordova build android'
      },
      run_android: {
        command: 'phonegap cordova run android'
      },
      // Exec for ios.
      build_ios: {
        command: 'phonegap cordova build ios'
      },
      run_ios: {
        command: 'phonegap cordova run ios'
      },
      // Exec for clean android platform.
      clean_platform_android: {
        command: 'phonegap cordova platform rm android && phonegap cordova platform add android'
      },
      // Exec for clean ios platform.
      clean_platform_ios: {
        command: 'phonegap cordova platform rm ios && phonegap cordova platform add ios'
      }
    },

    // Task for ect.
    ect: {
      render: {
        files: {
          'template/index.html' : ['template/ect/index.html.ect']
        }
      }
    },

    // Task for watch.
    watch: {
      ect: {
        files: ['template/ect/*.ect'],
        tasks: ['ect']
      }
    },

    // Task for copy.
    copy: {
      main: {
        expand: true,
        src: ['**/*',  '!**/ect/**'],
        cwd: 'template',
        dest: 'www'
      }
    }
  });

  // Task default : watch ect template files.
  grunt.registerTask('default', ['watch']);

  // Task init : create directory's.
  grunt.registerTask('init', ['exec:init']);

  // Task clean_android : remake android platform.
  grunt.registerTask('clean_android', ['copy', 'exec:clean_platform_android']);

  // Task clean_android : remake android platform.
  grunt.registerTask('clean_ios', ['copy', 'exec:clean_platform_ios']);

  // Task clean : remake android and ios platform.
  grunt.registerTask('clean', ['copy', 'exec:clean_platform_android', 'exec:clean_platform_ios']);

  // Task build_android : Build for android platform.
  grunt.registerTask('build_android', ['copy', 'exec:build_android']);

  // Task build_ios : Build for ios platform.
  grunt.registerTask('build_ios', ['copy', 'exec:build_ios']);

  // Task build : Build for android and ios platform.
  grunt.registerTask('build', ['copy', 'exec:build_android', 'exec:build_ios']);

  // Task run_android : Run for android platform.
  grunt.registerTask('run_android', ['build_android', 'exec:run_android']);

  // Task run_ios : Run for ios platform.
  grunt.registerTask('run_ios', ['build_ios', 'exec:run_ios']);

};
