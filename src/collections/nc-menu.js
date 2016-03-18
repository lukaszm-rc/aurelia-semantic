/* -*- javascript -*- */
"use strict";

/**
 * Menu - http://semantic-ui.com/collections/menu.html
 */

import {inject,  customElement, useView, containerless, bindable} from 'aurelia-framework';

@customElement('nc-menu')
@containerless()
@inject(Element)
export class NcMenu {
    @bindable id;
    @bindable type;
    @bindable variations;
    @bindable router;
    @bindable data;
    @bindable isRoot = true;

    constructor(Element) {
        this.id = getUid("menu");
        this.element = Element;
    }

    get _id() {
        return "#" + this.id;
    }

    get isDropdown() {
        return (this.type == "dropdown" ? true : false);
    }

    attached() {
        //$(this._id).dropdown({action: 'hide'});
        $(this._id).dropdown("hide");
    }

    propertyChanged(property, newValue, oldValue) {
        if (property == "data" && typeof newValue == "string") {
            newValue = JSON.parse(newValue);
        }
        this[property] = newValue;
        if (property == "router") {
            this.data = newValue.navigation;
        }

    }

    buttonClick() {
        console.log("nc-menu -> buttonClick");
        $(this._id).dropdown("toggle");
    }


}


/**
 * nc-menu-item
 */
@customElement('nc-menu-item')
@useView('./nc-menu/item.html')
@containerless()
export class NcMenuItem {

    @bindable type;
    @bindable href;
    @bindable data;

    constructor() {

    }

    attached() {

    }

    propertyChanged(property, newValue, oldValue) {
        this[property] = newValue;
        console.log({property: property, value: newValue});
    }

    get isDropdown() {
        return this.type == "dropdown" && typeof this.data.items == "Array" ? true : false;
    }
}

