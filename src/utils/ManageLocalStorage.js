import LocalStorage from './LocalStorage';

export default class ManageLocalStorage {
    constructor(tableName) {
        this.tableName = tableName;
        this.data = LocalStorage.get(tableName);
    }

    doCreate = (value) => {
        if (!value) return;

        this.data = value;

        for (let key in value) {
            if (value.hasOwnProperty(key)) {
                if (value[key].action === "delete") delete this.data[key];
            }
        }

        LocalStorage.set(this.tableName, this.data);
    };

    doUpdateOne = (value, key) => {
        if (!value) return;

        if (value.action === "delete") delete this.data[key];
        else if (value.action === "write" || value.action === "update") this.data[key] = value;

        LocalStorage.set(this.tableName, this.data);
    };

    doUpdate = (value) => {
        if (!value) return;

        for (let key in value) {
            if (value.hasOwnProperty(key)) {
                if (value[key].action === "delete") delete this.data[key];
                else if (value[key].action === "write" || value[key].action === "update") this.data[key] = value[key];
            }
        }

        LocalStorage.set(this.tableName, this.data);
    }
}
