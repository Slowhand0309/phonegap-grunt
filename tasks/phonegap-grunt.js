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
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Project configuration for debug.
  grunt.config.merge({

  });


  grunt.registerMultiTask('phonegap_grunt', 'Execute phonegap action.', function() {

    // Env for execute.
    var env = {
      command: this.target || 'build',
      platform: this.data['platform'] || 'android'
    };

    var commands = [];
    switch (env.command) {
      case 'init':
        var args = [
          this.data['path'] || '.',
          this.data['id'] || 'project.id',
          this.data['name'] || 'project_name'
        ].join(' ');
        commands = ['phonegap create ' + args];
        break;

      case 'build':
        if (typeof env.platform === 'string') {
          commands = ['phonegap cordova build ' + env.platform];
        } else {
          env.platform.forEach(function(p) {
            commands.push('phonegap cordova build ' + p);
          })
        }
        break;

      case 'run':
      if (typeof env.platform === 'string') {
        commands = ['phonegap cordova run ' + env.platform];
      } else {
        env.platform.forEach(function(p) {
          commands.push('phonegap cordova run ' + p);
        })
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
        })
      }
        break;
    }

    var config = {};
    commands.forEach(function(c, index) {
      config['cmd' + index] = {command: c};
    });
    grunt.config.set('exec', config);
    commands.forEach(function(c, index) {
      grunt.task.run(['exec:cmd' + index]);
    });
  });

}
