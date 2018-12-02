import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import nav from './_nav';
import { Link } from 'react-router-dom';
import './SubberMenu.css';

const { SubMenu } = Menu;
let currentMenu = [];
const getMenus = (nav, pathname, navigationMode, isMobile) => {
    return nav.map((item) => {
        if (item.children) {
            return (
                <SubMenu
                    key={item.id}
                    title={
                        <span>
                            <Icon
                                type={item.icon}
                            />
                            <span>{item.name}</span>
                        </span>
                    }
                    className={isMobile ? ('damnx-sub-menu-mobile') : 'damnx-' + navigationMode + '-sub-menu'}
                >
                    {getMenus(item.children, pathname, navigationMode)}
                </SubMenu>
            )
        }
        if (item.route === pathname) {
            currentMenu[0] = item.id
        }
        return (
            <Menu.Item
                key={item.id}
            >
                <Link to={item.route}>
                    {item.icon && <Icon type={item.icon} />}
                    <span>{item.name}</span>
                </Link>
            </Menu.Item>
        )
    })
}

class SubberMenu extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        let { mode, navigationMode, isMobile, collapsed } = this.props;
        let pathname = this.props.location.pathname;
        return (
            <Menu
                // theme='dark'
                mode={mode}
                style={{
                    lineHeight: '63px',
                    background: 'transparent',
                    border: 'transparent',
                    maxWidth: '715px'
                }}
                defaultSelectedKeys={currentMenu}
                className={isMobile ? ('damnx-menu-mobile') : ('damnx-' + navigationMode + '-menu')}
            >
                <Menu.Item key="0" className={collapsed ?'sidebar-new-quote-button-wrapper sidebar-new-quote-button-collapsed': 'sidebar-new-quote-button-wrapper'}>
                    {collapsed && !isMobile ? <Link to='/search'><Icon className='sidebar-new-quote-button-plus' type="plus" /></Link> : null}
                    {!collapsed ? <span>
                        <Link to='/search'>
                            <span className='sidebar-new-quote-button'>NEW SEARCH</span>
                        </Link>
                    </span>: <Link to='/search'>
                            <span >New Swarch</span>
                        </Link>}

                </Menu.Item>
                {getMenus(nav, pathname, navigationMode, isMobile)}
            </Menu >
        );
    }
}

export default SubberMenu;