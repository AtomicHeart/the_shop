export default class PropertySelector {
    constructor(element, dispatcher) {
        this.element = element;
        this.dispatcher = dispatcher;

        this.element.addEventListener('click', event => {
            const type = event.target.name;
            const value = event.target.value;

            this.dispatchEvent(type, value);
        });
    }

    dispatchEvent(type, value) {
        const event = new CustomEvent('property-selected', {
            detail: {
                type: type,
                value: value
            }
        });

        this.dispatcher.dispatchEvent(event);
    }
}
