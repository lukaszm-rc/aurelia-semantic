/* -*- javascript -*- */
"use strict";
import {customElement, containerless, bindable} from 'aurelia-framework';

@customElement( 'nc-icon' )
@containerless()
export class NcIcon {
	@bindable name = "help circle";
	@bindable size = null;
	@bindable variations = null;

}

