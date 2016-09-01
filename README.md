# phonegap-grunt
Grunt tasks for phonegap.

## Install

Recommend update the npm.
```sh
$ npm update -g npm
```
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
        path: '.',
        id: 'sample.com',
        name: 'sample'
      },
      // Platform add android and ios.
      add: {
        platform: ['android', 'ios']
      },
      // Build android and ios platforms.
      build: {
        platform: ['android', 'ios']
      },
      // Run android platform.
      run: {
        platform: 'android'
      },
      // Platform rm & platform add.
      clean: {
        platform: ['android', 'ios']
      }
    }
  });
};
```

## Tasks

> init

```sh
$ grunt pg:init
```

> add

```sh
$ grunt pg:add
```

> build

```sh
$ grunt pg:build
```

> run

```sh
$ grunt pg:run
```

> clean

```sh
$ grunt pg:clean
```
