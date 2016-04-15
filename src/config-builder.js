/**
 * Plugin configuration builder
 */
export class ConfigBuilder {
    constructor() {
        this.globalResources = [];
        this.useAll();
    }

    useAll() {
        this.globalResources.push('./collections/nc-breadcrumb');
        this.globalResources.push('./collections/nc-menu');
        this.globalResources.push('./elements/nc-button');
        this.globalResources.push('./elements/nc-container');
        this.globalResources.push('./elements/nc-header');
        this.globalResources.push('./elements/nc-icon');
        this.globalResources.push('./elements/nc-list');
        this.globalResources.push('./elements/nc-rating');
        this.globalResources.push('./elements/nc-segment');
        this.globalResources.push('./elements/nc-segments');
        this.globalResources.push('./modules/nc-modal');
        this.globalResources.push('./views/nc-card');
    }


}