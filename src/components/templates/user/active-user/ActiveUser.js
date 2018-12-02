import React, { Component } from 'react';
import '../../user/stylesUser.css';
import { Row, Col } from 'antd';
import './ActiveUser.css';
import logo from './logo.png'
import { Lang } from '../../../../utils';
import UserLayout from '../../../layouts/UserLayout';
import ActivateUserForm from '../../../organisms/active-user/ActivateUserForm';
import history from '../../../../utils/history';
import Session from '../../../../utils/Session';

// const TabPane = Tabs.TabPane;


class ActiveUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            error: {},
            confirmDirty: false,
            isLoading: false,
            inputs: {}
        };
        this.checkActivate();
        this.loading();
    }

    loading = () => {
        setTimeout(() => {
            this.setState({
                visible: true
            });
        }, 200);
    }

    checkActivate = () => {
        let session = Session.get();
        if (session && session.user.is_active) {
            this.onClick()
        }
    }

    render() {
        let { visible } = this.state;

        return (
            <div className='user-content'>
                <Row>
                    <Col className={visible ? 'div-show user-active-user-left' : 'div-hidden user-active-user-right'} xs={24} sm={24} md={14} lg={14} xl={18}>
                        <img className="user-active-user-left-logo" src={logo} alt="logo" />
                        <h3 className="user-active-user-left-logo-title" >{Lang.trans('welcome_to_fingroup')}</h3>
                    </Col>
                    <Col className={visible ? 'div-show user-active-user-right' : 'div-hidden user-active-user-right'} xs={24} sm={24} md={10} lg={10} xl={6}>
                        <h6
                            style={{
                                textTransform: 'uppercase'
                            }}
                            className="user-active-user-right-title">{Lang.trans('active_code')}
                        </h6>
                        <div id='content-active-user'></div>
                        <ActivateUserForm
                            onClick={this.onClick}
                        />
                    </Col>
                </Row>
            </div>
        );
    }

    onClick = () => {
        history.push(this.props.location.state ? this.props.location.state.from.pathname : '/');
    }
}

export default UserLayout(ActiveUser);