import React, {Component} from 'react';
import {Menu, Dropdown, Icon} from 'antd';
import './HeaderUser.css';
import Session from '../../../utils/Session';
import LocalStorage from '../../../utils/LocalStorage';
import {Lang} from '../../../utils';
import history from '../../../utils/history';
import {Firebase} from "../../../utils/Firebase";
import {message} from 'antd';


class HeaderUser extends Component {
    render() {
        // let user = Session.get().user;
        // let lang = LocalStorage.get('lang');

        const menu = (
            <Menu onClick={this.onClick}>
                <Menu.Item key='profile'> <Icon type="user"/> {Lang.trans('profile')}</Menu.Item>
                <Menu.Item key='settings'> <Icon type="setting"/> {Lang.trans('settings')}</Menu.Item>
                <Menu.Item key='logout'> <Icon type="poweroff"/> {Lang.trans('logout')}</Menu.Item>
            </Menu>
        );

        return (
            <Dropdown
                overlay={menu}
                placement="bottomLeft"
                trigger={['click']}
            >
                <div className='antd-damnx-header-index-account'>
                    <i style={{
                        color: '#27d974',
                        backgroundClip: 'padding-box',
                        fontSize: 25
                    }} className="fa fa-user-circle-o" aria-hidden="true"/>
                    {/* <Avatar src={avatar} /> */}
                    {/* <span className="antd-damnx-components-global-header-index-name">{lang === 'vi' ? user.last_name : user.first_name}</span> */}
                </div>
            </Dropdown>

        );
    }

    onClick = (e) => {
        if (e.key === 'logout') {
            this.logout();
        }
    }

    logout = () => {
        new Firebase("local_charge_names").removeEvent()
        new Firebase("local_charges").removeEvent()
        new Firebase("contact_company").removeEvent()
        new Firebase("nations").removeEvent()
        new Firebase("pricing_location").removeEvent()
        new Firebase("currencies").removeEvent()
        new Firebase("hscodes").removeEvent()
        new Firebase("cost_and_charge").removeEvent()
        new Firebase("shipment_type").removeEvent()
        new Firebase("freight_method").removeEvent()
        new Firebase("incoterms").removeEvent()
        sessionStorage.removeItem("logged");
        let locale = LocalStorage.get("locale")
        let lang = LocalStorage.get('lang')
        localStorage.clear();
        LocalStorage.set('lang', lang)
        LocalStorage.set("locale", locale)

        Session.remove();
        this.setState({
            logout: true
        });
        message.success(Lang.trans("logout_success"))
        history.push('/dang-nhap.html')
    }
}

export default HeaderUser;