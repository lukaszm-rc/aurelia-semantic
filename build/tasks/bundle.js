var gulp = require('gulp');
var bundle = require('aurelia-bundler');

var config = {
        force: true,
        baseURL: '.',                   // baseURL of the application
        configPath: './config.js',      // config.js file. Must be within `baseURL`
        bundles: {
            "dist/demo/app-build": {           // bundle name/path. Must be within `baseURL`. Final path is: `baseURL/dist/app-build.js`.

                "skip": "true",
                includes: [
                    '[demo/*.js]',
                    'demo.html!github:systemjs/plugin-text@0.0.4',
                    'demo/*.html!github:systemjs/plugin-text@0.0.4',
                    'demo/*.css!github:systemjs/plugin-text@0.0.4'
                ],
                excludes: [
                    'core-js',
                    'github:jspm/nodelibs-process'
                ],
                options: {
                    inject: true,
                    minify: true,
                    rev: false
                }
            },
            "dist/demo/vendor-build": {
                "skip": true,
                includes: [
                    'aurelia-bootstrapper',
                    'aurelia-animator-css',
                    'aurelia-*',
                    'jquery'
                ],
                options: {
                    inject: true,
                    minify: true
                }
            },
            "dist/app-bundle": {
                includes: [
                    'src/**/*.js',
                    'src/**/*.html!github:systemjs/plugin-text@0.0.4',
                    'src/**/*.css!github:systemjs/plugin-text@0.0.4',
                    'aurelia-bootstrapper',
                    'aurelia-animator-css',
                    'aurelia-event-aggregator',
                    'aurelia-http-client',
                    "aurelia-framework",
                    "aurelia-history-browser",
                    "aurelia-loader-default",
                    "aurelia-logging-console",
                    "aurelia-pal-browser",
                    "aurelia-router",
                    "aurelia-*",
                    "jquery"
                ],
                options: {
                    inject: true,
                    minify: false
                }
            }
        }
    }
    ;

gulp.task('unbundle', function () {
    return bundle.unbundle(config);
});

gulp.task('bundle', ['unbundle'], function () {   // Running `unbundle` before bundling is a good practice.
    return bundle.bundle(config);
});

