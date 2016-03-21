"use strict";
export var VERSION = '0.0.1.dev';
// Aurelia plugin hook
var _id = 0;
window.getUid = (prefix) => {
    prefix = prefix || "def";
    return prefix + (++_id);
}

export function configure(config) {
    config.use("aurelia-http-client");
    config.globalResources('collections/nc-breadcrumb');
    config.globalResources('collections/nc-menu');
    config.globalResources('elements/nc-button');
    config.globalResources('elements/nc-container');
    config.globalResources('elements/nc-header');
    config.globalResources('elements/nc-icon');
    config.globalResources('elements/nc-list');
    config.globalResources('elements/nc-rating');
    config.globalResources('elements/nc-segment');
    config.globalResources('elements/nc-segments');
    config.globalResources('modules/nc-modal');
    config.globalResources('views/nc-card');
}

