"use strict";
import {inject, customElement,containerless, bindable} from 'aurelia-framework';
@customElement('nc-button')
@containerless()
export class NcButton {
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
            console.log(event);
    }
}
