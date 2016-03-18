/* -*- javascript -*- */
"use strict";

/**
 * Breadcrumb - http://semantic-ui.com/collections/breadcrumb.html
 */

import {inject, customElement, useView, containerless, bindable} from 'aurelia-framework';

@inject(Element)
@customElement( 'nc-breadcrumb' )
@containerless
export class NcBreadcrumb {

	@bindable divider = null;
	@bindable size = null;

	constructor( Element ) {
		this.element = Element;
	}

	attached() {
		// TODO: Figure out how to auto-inject the divider
	}

}


/**
 * nc-breadcrumb-section
 */
@customElement( 'nc-breadcrumb-section' )
@useView('./nc-breadcrumb/section.html')
@containerless()
export class NcBreadcrumbSection {}

