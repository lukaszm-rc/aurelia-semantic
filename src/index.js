"use strict";
import {AureliaUiConfigBuilder} from './config-builder';
import 'semantic-ui';
import 'semantic-ui/semantic.css!';
var loc = window.location.pathname;
export var VERSION = '0.0.1.dev';
export var BASE = loc.substring(0, loc.lastIndexOf('/'));
var __id = 0;
window.getUid = (prefix) => {
    prefix = prefix || "def";
    return prefix + (++__id);
}
export function configure(aurelia, configCallback) {
    let builder = new AureliaUiConfigBuilder();

    if (configCallback !== undefined && typeof(configCallback) === 'function') {
        configCallback(builder);
    }

    // Provide core if nothing was specified
    if (builder.resources.length === 0) {
        builder.core();
    }

    // Pull the data off the builder
    let resources = builder.resources;

    if (builder.useGlobalResources) {
        aurelia.globalResources(resources);
    }
}