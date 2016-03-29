"use strict";
import {Aurelia} from 'aurelia-framework';
import {ConfigBuilder} from './config-builder';

export var VERSION = '0.0.5.dev';
// Aurelia plugin hook
var _id = 0;
window.getUid = (prefix) => {
    prefix = prefix || "def";
    return prefix + (++_id);
}

export function configure(aurelia, configCallback) {
    let builder = new ConfigBuilder();
    console.log(builder);
    if (configCallback !== undefined && typeof(configCallback) === 'function') {
        configCallback(builder);
    }

    if (builder.useGlobalResources) {
        aurelia.globalResources(builder.globalResources);
    }
}

