import {inject, customElement, containerless, bindable} from 'aurelia-framework';

@customElement('nc-rating')
@inject(Element)
@containerless()
export class NcRating {
    /** Base attributes */
    @bindable id;
    @bindable type = null;
    @bindable variations = null;
    @bindable options = null;

    /** Extra properties */
    @bindable size = "medium";

    /** Extra properties */
    @bindable min = 5;
    @bindable max = 5;
    @bindable value = 3;

    /** Events */
    @bindable click;


    constructor(Element) {
        this.id = getUid("rating");
        this.click = this.defaultClick;
        this.element = Element;
    }

    defaultClick(item) {
        this.value = $("#" + this.id).find(".active").length;
        console.log(`${this.id} ${this.value}/${this.max} rate has been clicked`);
    }

    propertyChanged(property, newValue, oldValue) {
        if (typeof newValue !== "function") {
            console.log(`${this.id} ${property} changed, is ${newValue}, was ${oldValue}`);
        }
        else
        {
            console.log(`${this.id} ${property} assigned as function`);
        }
        this[property] = newValue;
    }

    optionsChanged(newValue, oldValue) {
        this.options = JSON.parse(newValue);
        let indexes = Object.keys(this.options);
        indexes.forEach((idx) => {
            this[idx] = this.options[idx];
        })
    }

    attached() {
        //this.element.setAttribute("id", this.id);
        this.jElement = $('#' + this.id).rating({
            initialRating: this.value,
            maxRating: this.max
        });
        //this.jElement.on("Rate", console.log("rate"));
    }
}