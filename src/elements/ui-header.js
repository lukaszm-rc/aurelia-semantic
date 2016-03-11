/* -*- javascript -*- */
"use strict";

/**
 * Content Header - http://semantic-ui.com/elements/header.html#content-headers
 */

import {inject, customElement, bindable, containerless} from 'aurelia-framework';
import $ from 'jquery';

@customElement('ui-header')
@containerless()
export class UiHeader {

    @bindable type = null;
    @bindable size = null;
    sizes = ["huge", "large", "medium", "small", "tiny"];

}

