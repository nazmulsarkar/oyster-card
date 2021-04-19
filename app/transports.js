export default class Transports {
    constructor(transport) {

        this._transport = transport;

        this.transports = [
            {
                "type": "bus",
            },
            {
                "type": "tube",
            },
        ];
    }


    set transport(type) {
        this._transport = type;
    }

    get transport() {
        return this.transports.find(e => e.type === this._transport);
    }


}