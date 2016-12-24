'use strict';

var grunt = require('grunt');

exports.pg = {
  createProject: function(test)
  {
    test.expect(2);

    // Check for created files.
    var content = grunt.file.read('spec/tmp/config.xml');
    test.ok(content !== null, "Not found confing.xml");

    content = grunt.file.read('spec/tmp/www/index.html');
    test.ok(content !== null, "Not found www/index.html");

    test.done();
  },
  addPlatforms: function(test)
  {
    test.expect(2);
    // Check for should exist plarform file.
    var content = grunt.file.read('spec/tmp/platforms/android/AndroidManifest.xml');
    test.ok(content !== null, "Not found AndroidManifest.xml");

    content = grunt.file.read('spec/tmp/platforms/ios/sample.xcodeproj/project.pbxproj');
    test.ok(content !== null, "Not found xcodeproj");

    test.done();
  }
};
