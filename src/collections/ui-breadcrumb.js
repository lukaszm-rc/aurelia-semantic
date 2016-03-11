/* -*- javascript -*- */
"use strict";

/**
 * Breadcrumb - http://semantic-ui.com/collections/breadcrumb.html
 */

import {inject, customElement, useView, containerless, bindable} from 'aurelia-framework';

@inject(Element)
@customElement( 'ui-breadcrumb' )
@containerless
export class UiBreadcrumb {

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
@customElement( 'ui-breadcrumb-section' )
@useView('./ui-breadcrumb/section.html')
@containerless()
export class UiBreadcrumbSection {}

