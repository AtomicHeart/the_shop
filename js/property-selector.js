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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwcm9wZXJ0eS1zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wZXJ0eVNlbGVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkaXNwYXRjaGVyKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlciA9IGRpc3BhdGNoZXI7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0eXBlLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRpc3BhdGNoRXZlbnQodHlwZSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3Byb3BlcnR5LXNlbGVjdGVkJywge1xuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cbn1cbiJdLCJmaWxlIjoicHJvcGVydHktc2VsZWN0b3IuanMifQ==
