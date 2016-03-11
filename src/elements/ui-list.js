/* -*- javascript -*- */
"use strict";

/**
 * List - http://semantic-ui.com/elements/list.html
 */

import {inject, customElement, useView, containerless, bindable} from 'aurelia-framework';

@customElement( 'ui-list' )
@containerless()
export class UiList {

	@bindable type = null;
	@bindable variations = null;

}


/**
 * ui-list-item
 */
@customElement( 'ui-list-item' )
@useView('./ui-list/item.html')
@containerless()
export class UiListItem {}


/**
 * ui-list-item-content
 */
@customElement( 'ui-list-item-content' )
@useView('./ui-list/item-content.html')
@containerless()
export class UiListItemContent {}

