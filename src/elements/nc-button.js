"use strict";
import {customElement, containerless, bindable, inject} from 'aurelia-framework';
@customElement('nc-button')
@containerless()
@inject(Element)
export class NcButton {
    @bindable type = null;
    @bindable size = null;
    @bindable icon = null;
    @bindable state = null;
    @bindable variations = null;
    @bindable preset = null;
    @bindable className = null;
    @bindable click = this.defaultClick;

    constructor(element) {
        this.element = element;
    }

    defaultClick(event) {
        if (event) {
            console.log(event);
        }
    }

    propertyChanged(property, oldValue, newValue) {
        if (property === "icon") {
            this.icon = newValue;
            this.className = "icon";
        }
        this.property = newValue;

    }

    attached() {
    }
}
