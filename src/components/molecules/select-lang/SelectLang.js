import React, { Component } from 'react';
import './SelectLang.css';
import { Menu, Dropdown } from 'antd';
import LocalStorage from '../../../utils/LocalStorage';
import iconVietNam from './vietnam.png';
import iconUSA from './usa.jpg';

const defaultSelectedKeys = LocalStorage.get("lang") ? LocalStorage.get("lang") : 'vi';

const onClick = function ({ key }) {
    LocalStorage.set('lang', key);
    window.location.reload();
};



const menu = (
    <Menu
        onClick={onClick}
        defaultSelectedKeys={[defaultSelectedKeys]}
    >
        <Menu.Item
            key='vi'
        >
            <span><img style={{
                width: "16px"
            }} src={iconVietNam} alt='Việt Nam' /> Việt Nam</span>
        </Menu.Item>
        <Menu.Item
            key='en'
        >
            <span> <img style={{
                width: '16px'
            }} src={iconUSA} alt='English' /> English</span>
        </Menu.Item>
    </Menu>
);



class SelectLang extends Component {
    // constructor(props) {
    //     super(props);

    // }



    render() {
        return (
            <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
                <div className='select-lang-admin-header-index-search'>
                    {/* <Icon type="global" className='select-lang-admin-header-index-search-icon' /> */}
                    {defaultSelectedKeys === 'vi' ? <span style={{ fontSize: 10, textTransform: 'uppercase' }}>Việt Nam <img style={{
                        width: '16px'
                    }} src={iconVietNam} alt='Việt Nam' /></span> : <span style={{ fontSize: 10, textTransform: 'uppercase' }}>USD <img style={{
                        width: '16px'
                    }} src={iconUSA} alt='USD' /></span>}

                </div>
            </Dropdown>
        );
    }
}


export default SelectLang;