import {customElement, bindable, inject, containerless} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@customElement("nc-modal")
@inject(EventAggregator)
@containerless()
export class NcModal {
    @bindable _id;
    @bindable show = false;
    @bindable modalHeader = '';
    @bindable modalContent = '';
    @bindable modalData = '';
    @bindable buttonLabel = '';
    @bindable buttonIcon = '';
    @bindable show = this.onShow;

    constructor(EventAggregator) {
        this._id = getUid('modal');
        this.eventAggregator = EventAggregator;
    }


    attached(args) {
        this.args = args;
        this.initJs();

    }

    initJs() {
        $(`#${this._id}`).modal({
            allowMultiple: true
        });
        $(`#${this._id}`).modal('attach events', `.${this._id}.button`, 'toggle');
    }

    detached() {
        console.info("ModalWindow->detached()");
    }

    onShow() {
        this.loadComponent();
        $("#" + this._id).modal('show');
        this.show = (this.show == true ? false : true);

    }

    close() {
        this.modalContent = '';
        this.modalData = '';
        this.show = false;
    }

    subscribe() {
        this.eventAggregator.subscribe('closeModal', payload => {
            this.close();
        });
    }

    loadComponent() {
        this.subscribe();
    }


}