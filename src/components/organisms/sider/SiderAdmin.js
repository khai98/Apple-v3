import React, { Component } from 'react';
import { Layout, Drawer } from 'antd';
import SubberMenu from '../../organisms/menu/SubberMenu';
import './SiderAdmin.css';
import logo from './logo.png';

const { Sider } = Layout;

class SiderAdmin extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        let { navigationMode, collapsed, isMobile, fixedSidebar } = this.props;
        if (!isMobile && navigationMode === 'siderMenu') {
            return (
                this.renderSider(collapsed, fixedSidebar, navigationMode)
            );
        }
        if (isMobile) {
            return (
                this.renderDrawer(collapsed, fixedSidebar, navigationMode, isMobile)
            );
        }
        return null;
    }

    renderDrawer = (collapsed, fixedSidebar, navigationMode, isMobile) => {
        return (<Drawer
            placement="left"
            onClose={() => this.onClose(!collapsed)}
            visible={!collapsed}
            style={{
                padding: 0,
                height: '100vh',
            }}
            onHandleClick={() => this.onClose(collapsed)}
            className='ant-damnx-drawer-sider-admin-mobile'
            width={200}
            closable={false}
        >

            {this.renderSider(false, fixedSidebar, navigationMode, isMobile)}
        </Drawer>)
    }

    renderSider = (collapsed, fixedSidebar, navigationMode, isMobile) => {
        return (
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                // breakpoint="lg"
                width={200}
                onCollapse={this.onCollapse}
                style={{
                    minHeight: '100vh',
                    zIndex:99999
                }}
                collapsedWidth={60}
                className={fixedSidebar ? "antd-damnx-components-sider-menu-index-fixSiderbar" : ""}
                id={!isMobile && collapsed ? 'ant-layout-sider-damnx-collapsedWidth' : 'ant-layout-sider-damnx'}
            >
                <div className='antd-damnx-components-sider-menu-index-logo' id="logo" >
                    {fixedSidebar && collapsed ? <i onClick={() => this.onClose(!collapsed)} className="fa fa-bars icon-burger-button-damnx" aria-hidden="true"></i> : <div>
                        <a href="/"><img src={logo} alt="logo" />
                            <h1
                                className='ant-damnx-sider-admin-logo-text'
                            >40ftcloud</h1>
                        </a>
                        <a onClick={() => this.onClose(!collapsed)} href="javascript:;"><i className="fa fa-angle-left sider-admin-collapse-trigger" aria-hidden="true"></i></a>
                    </div>}

                </div>
                <SubberMenu
                    mode='inline'
                    navigationMode={navigationMode}
                    isMobile={isMobile}
                    collapsed={collapsed}
                    {...this.props}
                />
            </Sider>
        )
    }

    onCollapse = (collapsed) => {
        this.props.onClickToggle(collapsed)
    }

    onClose = (collapsed) => {
        this.props.onClickToggle(collapsed)
    }

}


export default SiderAdmin;