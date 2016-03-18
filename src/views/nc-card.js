/* -*- javascript -*- */
"use strict";

/**
 * Card - http://semantic-ui.com/views/card.html
 */

import {inject, customElement, useView, containerless, bindable} from 'aurelia-framework';
import $ from 'jquery';

@customElement( 'nc-card' )
@inject( Element )
export class UICardElement {

	@bindable type;
	@bindable variations;

}


/**
 * nc-card-content
 */
@customElement( 'nc-card-content' )
@useView('./nc-card/content.html')
@containerless()
export class UICardContentElement {}


/**
 * nc-card-image
 */
@customElement( 'nc-card-image' )
@useView('./nc-card/image.html')
@containerless()
export class UICardImageElement {
	@bindable src;
}


/**
 * nc-card-content-description
 */
@customElement( 'nc-card-content-description' )
@useView('./nc-card/content-description.html')
@containerless()
export class UICardContentDescriptionElement {}


/**
 * nc-card-extra-content
 */
@customElement( 'nc-card-extra-content' )
@useView('./nc-card/extra-content.html')
@containerless()
export class UICardContentExtraElement {}


/**
 * nc-card-content-header
 */
@customElement( 'nc-card-content-header' )
@useView('./nc-card/content-header.html')
@containerless()
export class UICardContentHeaderElement {}


/**
 * nc-card-content-meta
 */
@customElement( 'nc-card-content-meta' )
@useView('./nc-card/content-meta.html')
@containerless()
export class UICardContentMetaElement {}


