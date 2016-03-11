"use strict";
export class AureliaUiConfigBuilder {
    resources = [];
    useGlobalResources = true;

    core() {
        this.AureliaUiList()
        return this;
    }
    AureliaUiList() {

        this.resources.push( './collections/ui-breadcrumb' );
        this.resources.push( './collections/ui-menu' );
        this.resources.push( './elements/ui-button' );
        this.resources.push( './elements/ui-container' );
        this.resources.push( './elements/ui-header' );
        this.resources.push( './elements/ui-rating' );
        this.resources.push( './elements/ui-icon' );
        this.resources.push( './elements/ui-list' );
        this.resources.push( './elements/ui-segment' );
        this.resources.push( './elements/ui-segments' );
        this.resources.push( './modules/ui-modal' );
        this.resources.push( './views/ui-card' );
        return this;
    }
}