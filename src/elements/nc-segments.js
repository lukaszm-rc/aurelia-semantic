/* -*- javascript -*- */
"use strict";

/**
 * Segments - http://semantic-ui.com/elements/segment.html#segments
 */

import {customElement, containerless, bindable} from 'aurelia-framework';

@customElement( 'nc-segments' )
@containerless()
export class UISegments {
	@bindable type = null;
}

