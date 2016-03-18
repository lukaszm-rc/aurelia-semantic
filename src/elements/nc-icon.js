/* -*- javascript -*- */
"use strict";

/**
 * Icon - http://semantic-ui.com/elements/icon.html#/definition
 */

import {customElement, containerless, bindable} from 'aurelia-framework';

@customElement( 'nc-icon' )
@containerless()
export class NcIcon {

	@bindable name = "help circle";
	@bindable size;
	@bindable variations;

}

