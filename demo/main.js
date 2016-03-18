/* -*- javascript -*- */
"use strict";
import 'babel/polyfill';
import 'semantic';
import 'semantic/semantic.css!';
import {jQuery} from 'jquery';

export function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging()
        .globalResources('demo/resources/index.js')
        .plugin('aurelia-animator-css')
        .plugin('aurelia-ui');

    aurelia.start().then(a => a.setRoot('demo/app', document.body));
}


