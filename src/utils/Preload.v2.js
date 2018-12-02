import {Firebase} from './Firebase'

class Preload {

    static execute = (isLogin) => {
        return new Promise((resolve, reject) => {
            if (isLogin !== false)
                Promise.all([
                    new Firebase("").login(),
                    new Firebase("local_charge_names").loadFirstTime(),
                    new Firebase("local_charges").loadFirstTime(),
                    new Firebase("contact_company").loadFirstTime(),
                    new Firebase("nations").loadFirstTime(),
                    new Firebase("pricing_location").loadFirstTime(),
                    new Firebase("currencies").loadFirstTime(),
                    new Firebase("hscodes").loadFirstTime(),
                    new Firebase("cost_and_charge").loadFirstTime(),
                    new Firebase("freight_method").loadFirstTime(),
                    new Firebase("shipment_type").loadFirstTime(),
                    new Firebase("incoterms").loadFirstTime()
                ])
                    .then(val => resolve(val))
                    .catch(err => reject(err));
            else
                Promise.all([
                    new Firebase("").running(),
                    new Firebase("local_charge_names").load(),
                    new Firebase("local_charges").load(),
                    new Firebase("contact_company").load(),
                    new Firebase("nations").load(),
                    new Firebase("pricing_location").load(),
                    new Firebase("currencies").load(),
                    new Firebase("hscodes").load(),
                    new Firebase("cost_and_charge").load(),
                    new Firebase("freight_method").load(),
                    new Firebase("shipment_type").load(),
                    new Firebase("incoterms").load()
                ])
                    .then(val => resolve(val))
                    .catch(err => reject(err));
        })
    }
}

export default Preload;