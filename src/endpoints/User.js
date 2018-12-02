import axios from 'axios'
import Config from '../utils/Config'
// import { encodeData } from '../utils/index';

export const login = (data) => {
    return axios({
        method: 'post',
        url: Config.oauth_base_url + "/oauth/token",
        data: {
            'grant_type': 'password',
            'client_id': Config.app_id,
            'client_secret': Config.app_secret_key,
            'username': data.username,
            'password': data.password,
            'scope': '*'
        }
    })
}

export const activeUser = (data) => {
    return axios({
        method: 'post',
        url: Config.oauth_base_url + "/apple/active-code",
        data: {
            'code': data.verify_code
        },
        headers: {
            'Accept': 'application/json',
            "Authorization": "Bearer " + data.access_token
        }
    })
}

// get data user
export function me(data) {
    return axios({
        method: 'get',
        url: Config.oauth_base_url + "/apple/me",
        headers: {
            'Accept': 'application/json',
            "Authorization": "Bearer " + data.access_token
        },
    })
}

export function refreshToken(refeshToken) {
    return axios({
        method: 'post',
        url: Config.oauth_base_url + "/oauth/token",
        data: {
            'grant_type': 'refresh_token',
            'client_id': Config.app_id,
            'client_secret': Config.app_secret_key,
            'refresh_token': refeshToken,
            'scope': '*'
        }
    })
}

export const register = (data) => {
    return axios({
        method: 'post',
        url: Config.oauth_base_url + "/apple/register",
        data: {
            'last_name': data.last_name,
            'email': data.email,
            'email_confirmation': data.email_confirmation,
            'password': data.password,
            'password_confirmation': data.password_confirmation,
            'phone_number': data.phone_number,
            'company_name': data.company_name,
            'gender': data.gender,
            'first_name': data.first_name
        }
    })
}


