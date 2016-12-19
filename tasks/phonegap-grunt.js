/**
 * phonegap-grunt.js
 *
 * Slowhand0309
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-ect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Project configuration for debug.
  grunt.config.merge({

  });

  /**
   * Tasks for after exec command.
   *
   * @param {Object} afterTasks
   */
  function onAfter(afterTasks) {
    // Copy.
    var copyConfig = afterTasks.copy;
    if (copyConfig) {
      grunt.config.merge({ copy: copyConfig });
      grunt.task.run(['copy']);
    }

    // Exec.
    var execConfig = afterTasks.exec;
    if (execConfig) {
      grunt.config.merge({ exec: execConfig });
      grunt.task.run(['exec:main']);
    }
  }

  /**
   * Regist multi task.
   */
  grunt.registerMultiTask('pg', 'Execute phonegap action.', function() {

    // Env for execute.
    var env = {
      command: this.target || 'build',
      platform: this.data.platform || 'android'
    };

    var commands = [];
    var afterTasks = {};
    var basePath = this.data.path;

    switch (env.command) {
      case 'init':
        // Create project in tmp dir.
        var path = basePath || '.';
        path = path + '/__tmp__';

        var args = [
          path,
          this.data.id || 'project.id',
          this.data.name || 'project_name'
        ].join(' ');
        commands = ['phonegap create ' + args];

        // After task: copy from __tmp__.
        var copyConfig = {
          main: {
            expand: true,
            src: ['**/*', '!package.json'],
            cwd: path,
            dest: basePath || '.'
          }
        };
        afterTasks.copy = copyConfig;

        // After task: remove.
        var execConfig = {
          main: {
            command: 'rm -rf ' + path
          }
        };
        afterTasks.exec = execConfig;
        basePath = null; // Not change directory.
        break;

      case 'build':
        if (typeof env.platform === 'string') {
          commands = ['phonegap cordova build ' + env.platform];
        } else {
          env.platform.forEach(function(p) {
            commands.push('phonegap cordova build ' + p);
          });
        }
        break;

      case 'run':
      if (typeof env.platform === 'string') {
        commands = ['phonegap cordova run ' + env.platform];
      } else {
        env.platform.forEach(function(p) {
          commands.push('phonegap cordova run ' + p);
        });
      }
        break;

      case 'add':
      if (typeof env.platform === 'string') {
        commands = ['phonegap cordova platform add ' + env.platform];
      } else {
        env.platform.forEach(function(p) {
          commands.push('phonegap cordova platform add ' + p);
        });
      }
        break;

      case 'clean':
      if (typeof env.platform === 'string') {
        commands = ['phonegap cordova platform rm ' + env.platform +
        ' && phonegap cordova platform add ' + env.platform];
      } else {
        env.platform.forEach(function(p) {
          commands.push('phonegap cordova platform rm ' + p +
          ' && phonegap cordova platform add ' + p);
        });
      }
        break;
    }


    var config = {};
    commands.forEach(function(c, index) {
      if (basePath) {
        c = 'cd ' + basePath + ' && ' + c;
      }
      config['cmd' + index] = {command: c};
    });
    grunt.config.set('exec', config);

    commands.forEach(function(c, index) {
      grunt.task.run(['exec:cmd' + index]);
    });

    onAfter(afterTasks);
  });
};
