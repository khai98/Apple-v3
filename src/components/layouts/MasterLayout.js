import React from 'react';
import { Layout } from 'antd';
import Header from '../organisms/header/HeaderTop';
import './style.css';
import LocalStorage from '../../utils/LocalStorage';
import '../../resources/css/icomoon.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../resources/css/icomoon.css';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import SiderAdmin from '../organisms/sider/SiderAdmin';


const { Content, Footer } = Layout;

const MasterLayout = (Component) => {

    return class extends React.Component {

        constructor(props) {
            super(props);
            let contentWidth = LocalStorage.get('contentWidth') ? LocalStorage.get('contentWidth') : 'fixed';
            let navigationMode = LocalStorage.get('navigationMode') ? LocalStorage.get('navigationMode') : 'siderMenu';
            let fixedHeader = LocalStorage.get('fixedHeader') ? LocalStorage.get('fixedHeader') : true;
            let fixedSidebar = LocalStorage.get('fixedSidebar') ? LocalStorage.get('fixedSidebar') : true;
            let style = LocalStorage.get('style') ? LocalStorage.get('style') : 'dark';
            this.state = {
                vars: {},
                initialValue: {},
                collapsed: false,
                visible: false,
                navigationMode: navigationMode,
                isMobile: false,
                contentWidth: contentWidth,
                fixedHeader: fixedHeader,
                fixedSidebar: fixedSidebar,
                style: style,
            };
        }

        componentWillMount() {

            let { isMobile, contentWidth, navigationMode, fixedHeader, fixedSidebar, style } = this.state;
            if (isMobile || navigationMode === 'siderMenu') {
                contentWidth = 'fluid'
            }

            LocalStorage.set('contentWidth', contentWidth);
            LocalStorage.set('fixedHeader', fixedHeader);
            LocalStorage.set('fixedSidebar', fixedSidebar);
            LocalStorage.set('style', style);
            this.setState({
                ...this.setState,
                contentWidth: contentWidth,
            })

        }

        componentDidMount() {
            this.enquireHandler = enquireScreen(mobile => {
                const { isMobile, navigationMode, contentWidth } = this.state;
                if (isMobile !== mobile || navigationMode === 'siderMenu') {
                    this.setState({
                        isMobile: mobile,
                        contentWidth: 'fluid'
                    });
                    LocalStorage.set('contentWidth', 'fluid');
                } else {
                    this.setState({
                        isMobile: false,
                        contentWidth: contentWidth
                    });
                    LocalStorage.set('contentWidth', contentWidth);
                }
            });
        }

        componentWillUnmount() {
            unenquireScreen(this.enquireHandler);
        }

        render() {
            let { collapsed, navigationMode, isMobile, contentWidth, fixedHeader, fixedSidebar } = this.state;
            return (
                <Layout>
                    {/* sider */}
                    <SiderAdmin
                        navigationMode={navigationMode}
                        collapsed={collapsed}
                        onClickToggle={this.onClickToggle}
                        isMobile={isMobile}
                        fixedSidebar={fixedSidebar}
                        {...this.props}
                    />
                    <Layout>
                        {/*header */}
                        <Header
                            navigationMode={navigationMode}
                            collapsed={collapsed}
                            onClickToggle={this.onClickToggle}
                            isMobile={isMobile}
                            contentWidth={contentWidth}
                            fixedHeader={fixedHeader}
                            {...this.props}
                        />
                        <Layout className='layout-content'>
                            <Content
                                className={contentWidth === 'fluid' ? 'ant-damnx-content-fluid' : 'ant-damnx-content-fixed'}
                                style={
                                    fixedHeader ? { paddingTop: '50px', width: '100%',maxHeight:50000 } : { width: '100%' }
                                    
                                }
                            >
                                <Component
                                    collapsed={collapsed}
                                    {...this.props}
                                />
                            </Content>
                        </Layout>
                        <Footer>
                            <Content>
                                Footer
                            </Content>
                        </Footer>
                    </Layout>
                </Layout>
            )
        }

        onClickToggle = (collapsed) => {
            this.setState({
                collapsed
            })
        }
    }
}

export default MasterLayout;