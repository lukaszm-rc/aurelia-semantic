/* -*- javascript -*- */
"use strict";

/**
 * Content Header - http://semantic-ui.com/elements/header.html#content-headers
 */

import {inject, customElement,containerless, bindable} from 'aurelia-framework';
import $ from 'jquery';

const interceptMethods = ['updateTarget', 'updateSource', 'callSource'];
@customElement('ui-button')
@containerless()
export class UiButton {
    @bindable type = null;
    @bindable size = null;
    @bindable icon = null;
    @bindable state = null;
    @bindable variations = null;
    @bindable preset = null;
    @bindable click;
    constructor() {
        this.click = this.defaultClick;

    }
    defaultClick(event) {
        console.log("defaultClick");
    }
}
