import React, { Component } from 'react';
import '../../user/stylesUser.css';
import { Row, Col } from 'antd';
import './register.css';
import logo from './logo.png'
import { Lang } from '../../../../utils';
import UserLayout from '../../../layouts/UserLayout';
import RegisterForm from '../../../organisms/register/RegisterForm';

// const TabPane = Tabs.TabPane;


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            error: {},
            confirmDirty: false,
            isLoading: false,
            inputs:{
                
            }
        };
        this.loading()
    }

    loading = () => {
        setTimeout(() => {
            this.setState({
                visible: true
            });
        }, 200);
    }

    render() {
        let { visible } = this.state;

        return (
            <div className='user-content'>
                <Row>
                    <Col className={visible ? 'div-show user-register-left' : 'div-hidden user-register-right'} xs={24} sm={24} md={14} lg={14} xl={18}>
                        <img className="user-register-left-logo" src={logo} alt="logo" />
                        <h3 className="user-register-left-logo-title" >{Lang.trans('welcome_to_fingroup')}</h3>
                    </Col>
                    <Col className={visible ? 'div-show user-register-right' : 'div-hidden user-register-right'} xs={24} sm={24} md={10} lg={10} xl={6}>
                        <h6
                            style={{
                                textTransform: 'uppercase'
                            }}
                            className="user-register-right-title">{Lang.trans('create_an_account')}
                        </h6>
                        <div id='content-register'></div>
                        <RegisterForm />

                    </Col>
                </Row>
            </div>
        );
    }
}

export default UserLayout(Register);