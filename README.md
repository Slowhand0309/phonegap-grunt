# phonegap-grunt
Grunt tasks for phonegap:iphone:.

[![Build Status](https://travis-ci.org/Slowhand0309/phonegap-grunt.svg?branch=master)](https://travis-ci.org/Slowhand0309/phonegap-grunt)

## Require :warning:

```sh
$ npm install -g phonegap@latest
$ npm install -g grunt-cli
```

※ Recommend update the npm.
```sh
$ npm update -g npm
```

## Install

Add the following to the `package.json`.

```js
"devDependencies": {
  "phonegap-grunt": "git://github.com/Slowhand0309/phonegap-grunt.git"
}
```


## Configuration

Sample `Gruntfile.js`

```js
module.exports = function(grunt) {

  // Load npm tasks.
  grunt.loadNpmTasks('phonegap-grunt');

  // Configuration.
  grunt.initConfig({

    // phonegap-grunt config.
    pg: {
      // Project create.
      init: {
        path: 'project_path',
        id: 'sample.com',
        name: 'sample'
      },
      // Platform add android and ios.
      add: {
        path: 'project_path',
        platform: ['android', 'ios']
      },
      // Build android and ios platforms.
      build: {
        path: 'project_path',
        platform: ['android', 'ios']
      },
      // Run android platform.
      run: {
        path: 'project_path',
        platform: 'android'
      },
      // Platform rm & platform add.
      clean: {
        path: 'project_path',
        platform: ['android', 'ios']
      }
    }
  });
};
```

## Tasks

|Name|Command|Option|Summary|
|:---|:------|:-----|:------|
|init|`grunt pg:init`|`path`: project path<br>`id`: project id<br>`name`: project name|Create phonegap project in the specified directory|
|add|`grunt pg:add`|`path`: project path<br>`platform`: specified platform|Add platform to project|
|build|`grunt pg:build`|`path`: project path<br>`platform`: specified platform|Build for specified platform|
|run|`grunt pg:run`|`path`: project path<br>`platform`: specified platform|Run for specified platform|
|clean|`grunt pg:clean`|`path`: project path<br>`platform`: specified platform|Remove specified platform and platforms again|

## Licence

[MIT](https://github.com/tcnksm/tool/blob/master/LICENCE)

## Author

[slowhand0309](https://github.com/Slowhand0309)
