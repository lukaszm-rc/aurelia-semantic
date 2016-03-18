/* -*- javascript -*- */
"use strict";

/**
 * List - http://semantic-ui.com/elements/list.html
 */

import {inject, customElement, useView, containerless, bindable} from 'aurelia-framework';

@customElement( 'nc-list' )
@containerless()
export class NcList {

	@bindable type = null;
	@bindable variations = null;

}


/**
 * ui-list-item
 */
@customElement( 'nc-list-item' )
@useView('./nc-list/item.html')
@containerless()
export class NcListItem {}


/**
 * ui-list-item-content
 */
@customElement( 'nc-list-item-content' )
@useView('./nc-list/item-content.html')
@containerless()
export class NcListItemContent {}

