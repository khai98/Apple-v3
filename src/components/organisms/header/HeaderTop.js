import React, { Component } from 'react';
import { Layout } from 'antd';
import './HeaderTop.css';
import HeaderUser from '../../../components/molecules/header-user/HeaderUser';
import SelectLang from '../../../components/molecules/select-lang/SelectLang';
import logo from './logo.png';

const { Header, Content } = Layout;

class HeaderTop extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        let { navigationMode, collapsed, isMobile, contentWidth, fixedHeader } = this.props;
        return (
            <Header
                style={
                    fixedHeader && !collapsed && navigationMode === 'siderMenu' && !isMobile ?
                        {
                            padding: '0 15px',
                            width: 'calc(100% - 200px)',
                            color: '#fff'
                        } : fixedHeader && collapsed && navigationMode === 'siderMenu' && !isMobile ?
                            {
                                padding: '0 15px',
                                width: 'calc(100% - 60px)',
                                color: '#fff'
                            } : isMobile ? {
                                padding: '0px 15px',
                            } : navigationMode === 'topMenu' && contentWidth === 'fluid' && !isMobile ? {
                                padding: '0px 24px',
                                color: '#fff'
                            } : {
                                        padding: '0 10px',
                                        color: '#fff'
                                    }
                }
                className={
                    isMobile && fixedHeader ? "ant-damnx-header-mobile ant-damnx-fixed-header" : fixedHeader ? " ant-damnx-fixed-header" : isMobile ? " ant-damnx-header-mobile" : ""
                }
                id="ant-damnx-header"
            >
                <Content className={contentWidth === 'fluid' ? 'ant-damnx-content-fluid' : 'ant-damnx-content-fixed'}>
                    <div className={navigationMode === 'topMenu' ? "antd-damnx-components-top-nav-header-index-left" : 'antd-damnx-components-top-header-index-left'}>
                        {collapsed && <a href='/'>
                            {<img style={{
                                width: 35,
                                float: "left",
                                marginTop: 9
                            }} src={logo} />}
                            <h1 style={{
                                float: "left",
                                fontSize: 13
                            }}
                                className='ant-damnx-sider-admin-logo-text'
                            >40ftcloud</h1>
                        </a>}


                    </div>
                    <div className='antd-damnx-components-global-header-index-right'>
                        <SelectLang />
                        <HeaderUser />
                    </div>
                </Content>
            </Header >
        );
    }

    toggle = (collapsed) => {
        this.props.onClickToggle(collapsed);
    }
}

export default HeaderTop;