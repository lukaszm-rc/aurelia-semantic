"use strict";

import {customElement, containerless, bindable} from 'aurelia-framework';


@customElement('nc-container')
@containerless()
export class NcContainer {
    @bindable type;
    @bindable variations;
    types = ["text", "fluid ", "left aligned", "right aligned", "justified"];

    constructor() {
    }

    attached() {
    }
}

