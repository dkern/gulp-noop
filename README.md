# gulp-noop
simple no-operation plugin for [gulp](http://gulpjs.com/)

-----

## About
This plugin is just the same as `noop` in [`gulp-util`](https://www.npmjs.com/package/gulp-util).
If you already use `gulp-util` in your project, you should pick this instead of `gulp-noop`.
If not, this plugin is a smaller and lighter alternative. :)


## Install
```SH
$ npm install --save-dev gulp-noop
```


## Example
Use it for inline decisions:

```JS
var noop = require("gulp-noop");
var obfuscate = true;

gulp.task("my-task", function() {
    return gulp.src("*.js")
               .pipe(jshint())
               .pipe(obfuscate ? uglify() : noop())
               .pipe(gulp.dest("./dist"));
});
```

Or just replace other actions with `noop()`, like for debugging purpose:
```JS
var noop = require("gulp-noop");

gulp.task("my-task", function() {
    return gulp.src("*.js")
               .pipe(noop())
               .pipe(noop())
               .pipe(gulp.dest("./dist"));
});
```