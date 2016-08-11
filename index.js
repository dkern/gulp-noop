/*!
 * gulp-noop
 * simple no-operation extension for gulp
 */

"use strict";

var through = require("through2");

module.exports = function() {
    // just pass-through anything
    return through.obj();
};