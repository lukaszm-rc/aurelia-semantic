/* -*- javascript -*- */
"use strict";

/**
 * Content Header - http://semantic-ui.com/elements/header.html#content-headers
 */

import {inject, customElement, bindable, containerless} from 'aurelia-framework';

@customElement('nc-header')
@containerless()
export class NcHeader {

    @bindable type = null;
    @bindable size = null;
    sizes = ["huge", "large", "medium", "small", "tiny"];

}

