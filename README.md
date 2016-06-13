# phonegap-grunt
Grunt tasks for phonegap.

## Tasks

> default

```sh
$ grunt
```

Watch `template/ect/*.ect`. If modified file, Render html file.

> init

```sh
$ grunt init
```

Create phonegap project.<br>
※ Replace {{path}},{{id}},{{name}} in Gruntfile.js.

> clean android

```sh
$ grunt clean_android
```

Remove android platform and remake.

> clean ios

```sh
$ grunt clean_ios
```

Remove ios platform and remake.

> clean

```sh
$ grunt clean
```

Remove android ios platform and remake.

> build android

```sh
$ grunt build_android
```

Build android platform.

> build ios

```sh
$ grunt build_ios
```

Build ios platform.

> build

```sh
$ grunt build
```

Build android ios platform.

> spec

```sh
$ grunt spec
```

Run spec by jasmine.
