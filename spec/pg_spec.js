'use strict';

var grunt = require('grunt');

exports.pg = {
  createProject: function(test)
  {
    test.expect(2);

    // Check created files via phonegap-cli.
    var content = grunt.file.read('spec/tmp/config.xml');
    test.ok(content !== null, "Not found confing.xml");

    content = grunt.file.read('spec/tmp/www/index.html');
    test.ok(content !== null, "Not found www/index.html");

    test.done();
  }
};
