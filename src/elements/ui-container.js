"use strict";

import {customElement, containerless, bindable} from 'aurelia-framework';


@customElement('ui-container')
@containerless()
export class UiContainer {
    @bindable type;
    @bindable variations;
    types = ["text", "fluid ", "left aligned", "right aligned", "justified"];

    constructor() {
    }

    attached() {
    }
}

