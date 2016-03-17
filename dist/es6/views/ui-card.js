/* -*- javascript -*- */
"use strict";

/**
 * Card - http://semantic-ui.com/views/card.html
 */

import {inject, customElement, useView, containerless, bindable} from 'aurelia-framework';
import $ from 'jquery';

@customElement( 'ui-card' )
@inject( Element )
export class UICardElement {

	@bindable type;
	@bindable variations;

}


/**
 * nc-card-content
 */
@customElement( 'ui-card-content' )
@useView('./ui-card/content.html')
@containerless()
export class UICardContentElement {}


/**
 * nc-card-image
 */
@customElement( 'ui-card-image' )
@useView('./ui-card/image.html')
@containerless()
export class UICardImageElement {
	@bindable src;
}


/**
 * nc-card-content-description
 */
@customElement( 'ui-card-content-description' )
@useView('./ui-card/content-description.html')
@containerless()
export class UICardContentDescriptionElement {}


/**
 * nc-card-extra-content
 */
@customElement( 'ui-card-extra-content' )
@useView('./ui-card/extra-content.html')
@containerless()
export class UICardContentExtraElement {}


/**
 * nc-card-content-header
 */
@customElement( 'ui-card-content-header' )
@useView('./ui-card/content-header.html')
@containerless()
export class UICardContentHeaderElement {}


/**
 * nc-card-content-meta
 */
@customElement( 'ui-card-content-meta' )
@useView('./ui-card/content-meta.html')
@containerless()
export class UICardContentMetaElement {}


