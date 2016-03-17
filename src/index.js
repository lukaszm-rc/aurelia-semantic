/**
 * Aurelia-Semantic-UI -- Aurelia components for Semantic-UI
 * $Id$
 *
 * Authors
 * - Michael Granger <ged@FaerieMUD.org>
 */

import 'semantic';
import 'semantic/semantic.css!';


export var VERSION = '0.0.1.dev';

// Aurelia plugin hook
export function configure(config) {
    config.globalResources( './collections/ui-breadcrumb' );
    config.globalResources( './collections/ui-menu' );
    config.globalResources( './elements/ui-container' );
    config.globalResources( './elements/ui-header' );
    config.globalResources( './elements/ui-icon' );
    config.globalResources( './elements/ui-list' );
    config.globalResources( './elements/ui-segment' );
    config.globalResources( './elements/ui-segments' );
    config.globalResources( './modules/ui-modal' );
    config.globalResources( './views/ui-card' );
}

