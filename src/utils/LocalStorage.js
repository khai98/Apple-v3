import * as CONST from '../config/constant';

export default class LocalStorage {
    static get = (key) => {
        switch (key) {
            case "cost_and_charge":
            case "currencies":
            case "local_charge_names":
            case "local_charges":
                return new FormatData().getDataByKey(key);
            case "mhscodeList":
                return new FormatData().getMhscodeList();
            case "selections":
                return new FormatData().getSelections();
            default:
                return JSON.parse(window.localStorage.getItem(key));

        }

        return JSON.parse(window.localStorage.getItem(key))
    };

    static set = (key, value) => {
        window.localStorage.setItem(key, JSON.stringify(value))
    };

    static remove = (key) => {
        window.localStorage.removeItem(key)
    };

    static clear = () => {
        window.localStorage.clear()
    };

}

class FormatData {

    getDataByKey = (key) => {
        let data = window.localStorage.getItem(key);
        return data ? Object.values(JSON.parse(data)) : [];
    };

    getMhscodeList = () => {
        let value = JSON.parse(window.localStorage.getItem("hscodes"));

        for (let key in value) {
            if (value.hasOwnProperty(key)) {
                let hscode = value[key];
                hscode.value = hscode.hscode;
                hscode.label = hscode.hscode + ' : ' + hscode.description;
                value[key] = hscode;
            }
        }

        return Object.values(value);
    };

    getSelections = () => {
        let output = {};

        output.data_nation = this.getDataByKey("nations");
        output.local_charges = this.getDataByKey("local_charges");
        output.carriers = this.defineCarriersForwarders(CONST.CARRIER_TYPE);
        output.forwarders = this.defineCarriersForwarders(CONST.FORWARDER_TYPE);
        output.nations = this.defineNations();
        output.ports = this.definePort();

        return output;
    };

    defineCarriersForwarders = (type) => {
        let contact_company = this.getDataByKey("contact_company");
        let output = [];

        for (let i = 0; i < contact_company.length; i++) {
            if (contact_company[i].type === type) output.push(contact_company[i]);
        }

        return output;
    };

    defineNations = () => {
        let output = [];
        let nations = this.getDataByKey("nations");

        for (let i = 0; i < nations.length; i++) {
            output.push(nations[i].name);
        }

        return output;
    };

    definePort = () => {
        let output = {};
        let nations = this.getDataByKey("nations");
        let pricing_location = this.getDataByKey("pricing_location");

        for (let i = 0; i < pricing_location.length; i++) {
            new Port().defineNations(pricing_location[i], nations, output);
        }

        return output;
    }

}

class Port {
    dalLocalStorage = (value, arr) => {
        if (!arr) arr = [];

        arr.push(value);

        return arr;
    };

    defineType = (value, data) => {
        let output = data;
        switch (parseInt(value.type)) {
            case CONST.OCEAN_PORT_TYPE:
                output["ocean"] = this.dalLocalStorage(value, output["ocean"]);
                break;
            case CONST.RIVER_PORT_TYPE:
                output["river"] = this.dalLocalStorage(value, output["river"]);
                break;
            default:
                break;
        }
        return output;
    };

    defineTransportmentType = (value, nation) => {
        let output = nation;
        switch (value.transportment_type) {
            case CONST.SEA_FCL:
            case CONST.SEA_LCL:
                if (output["sea"]) output["sea"] = this.defineType(value, output["sea"]);
                else output.sea = this.defineType(value, {});
                break;
            case CONST.ROAD:
                output["road"] = this.dalLocalStorage(value, output["road"]);
                break;
            case CONST.AIR:
                output["air"] = this.dalLocalStorage(value, output["air"]);
                break;
            default:
                break;
        }
        return output;
    };

    defineNations = (value, nations, ports) => {
        let output = ports;
        let check = true;

        for (let i = 0; i < nations.length; i++) {
            let val = nations[i];
            if (value.nation_code === val.nation_code && check === true) {
                if (ports[val.name]) output[val.name] = this.defineTransportmentType(value, output[val.name]);
                else output[val.name] = this.defineTransportmentType(value, {});
                check = false;
            }
        }

        return output;
    };

}