import en from '../config/lang/en/en';
import vi from '../config/lang/vi/vi';
import LocalStorage from './LocalStorage';

const CurrentLang = () => {
    return (LocalStorage.get("lang") === "vi") ? vi : en
}

export class Lang {
    LocalStorage
    static trans = (key, fieldName, min) => {
        if (!key) return;
        let locale = LocalStorage.get("locale") || "en"
        let pathArr = key.split(".")
        let path = locale + '/' + pathArr[0]
        try {
            let dict = require("../config/lang/" + path)
            let msg
            if (pathArr.length === 2) {
                msg = dict[pathArr[1]] !== undefined ? dict[pathArr[1]] : key
            } else if (pathArr.length === 3) {
                msg = dict[pathArr[1]][pathArr[2]] !== undefined ? dict[pathArr[1]][pathArr[2]] : key
            }

            if (fieldName) {
                msg = msg.replace(":attribute", fieldName)
            }

            if (min) {
                msg = msg.replace(":min", min)
            }

            return msg
        } catch (e) {
            return CurrentLang()[key] !== undefined ? CurrentLang()[key] : key
        }
    }

    static validate = (key, fieldName, min, max) => {
        if (!key) return;
        let msg = CurrentLang()[key] !== undefined ? CurrentLang()[key] : key
        if (fieldName) msg = msg.replace(":attribute", fieldName)
        if (min != null) msg = msg.replace(":min", min)
        if (max != null) msg = msg.replace(":max", max)
        return msg
    }
}

export const encodeData = (data) => {
    let params = []
    for (let i in data) {
        if (data[i]) {
            params.push(i + "=" + data[i])
        }

    }
    let paramsString = params.join("&")
    return paramsString;
}

export const decodeUrl = (search) => {
    if (!search) {
        return null
    }
    let params = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    return params;
}