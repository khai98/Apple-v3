import React, { Component } from 'react';
import UserLayout from '../../../layouts/UserLayout';
import './Login.css';
import '../../user/stylesUser.css'
import {  Row, Col, message } from 'antd';
import Credenciais from '../../../organisms/login/credenciais';
import Session from '../../../../utils/Session';
import { refreshToken, me, login } from '../../../../endpoints/User';
import handleException from '../../../../utils/handleException';
import { Lang } from '../../../../utils';
import history from '../../../../utils/history';
import LoadMasterData from '../../../organisms/load_master_data/LoadMasterData';
import Loading from '../../../organisms/loading/Loading';
import logo from './logo.png'

class Login extends Component {
    constructor(props) {
        super(props);
        let session = Session.get()
        this.state = {
            visible: false,
            isLogin: false,
            logged: false,
            messageError: {},
            isLoading: session ? true : false,
            percent: 1
        };
        this.loading();
        let self = this;
        if (session) {
            self.runningLoading();
            self.refreshToken(session).then(newSession => {
                self.setState({
                    logged: true,
                    session: newSession,
                    percent: 100
                }, () => {
                    setTimeout(() => {
                        self.setState({
                            isLoading: false
                        })
                    }, 300)
                })
            }).catch(err => {
                Session.remove();
                setTimeout(() => {
                    self.setState({
                        session: null,
                        isLoading: false
                    })
                }, 300)
            })
        }
    }

    runningLoading = () => {
        let self = this
        let t = setInterval(() => {
            if (self.state.percent < 70) {
                self.setState({
                    percent: self.state.percent + Math.round((Math.random() * 15))
                })
            } else if (self.state.percent < 95) {
                self.setState({
                    percent: self.state.percent + 1
                })
            }
            else {
                clearInterval(t);
            }
        }, 300);
    }

    refreshToken = async (oldSession) => {
        if (!oldSession) return Promise.resolve(null);
        return new Promise((rs, rj) => {
            refreshToken(oldSession.token.refresh_token).then(res => {
                let token = res.data
                let data = {
                    access_token: token.access_token,
                    username: oldSession.user.email,
                    password: null
                }

                me(data).then(res => {
                    sessionStorage.setItem("logged", true);
                    let newUser = res.data.data
                    let newSession = {
                        token: token,
                        user: newUser
                    };
                    Session.set(newSession)
                    rs(newSession)
                }).catch(err => {
                    rj(err)
                })

            }).catch(err => rj(err))
        })
    }

    submit = (values) => {

        let self = this;
        self.setState({
            isLoading: true
        }, () => {
            self.runningLoading();
            this.login(values).then((session) => {
                self.setState({
                    logged: true,
                    session: session,
                    percent: 100
                }, () => {
                    setTimeout(() => {
                        self.setState({
                            isLoading: false
                        })
                    }, 300)
                })
            }).catch(err => {
                handleException(err).next();
                history.push('/dang-nhap.html');
                message.error(Lang.trans("err_info_login"));

                self.setState({
                    isLoading: false,
                })
            })
        })
    }

    login = (values) => {
        return new Promise((rs, rj) => {
            login(values).then(res => {
                let token = res.data
                let data = {
                    values,
                    access_token: token.access_token
                }

                me(data).then(res => {
                    message.success(Lang.trans('login_success'));
                    this.setState({ isLogin: true })
                    sessionStorage.setItem("logged", true);
                    let newUser = res.data.data
                    let newSession = {
                        token: token,
                        user: newUser
                    };
                    Session.set(newSession)
                    rs(newSession)
                }).catch(err => {
                    rj(err)
                })

            }).catch(err => rj(err))
        })
    }


    loading = () => {
        setTimeout(() => {
            this.setState({
                visible: true
            });
        }, 200);
    }

    render() {
        let { visible, isLoading, logged, percent } = this.state;
        if (isLoading) {
            return (
                <Loading
                    percent={percent}
                />
            )
        }

        if (logged) {
            let from = this.props.location.state || '/'
            let activecode = '/activate'
            let redirectTo = this.state.session.user.is_active ? from : activecode
            return (
                <LoadMasterData isLogin={true} from={redirectTo} session={this.state.session} />
            )
        }

        return (
            <div className='user-content'>
                <Row>
                    <Col className={visible ? 'div-show user-login-left' : 'div-hidden user-login-right'} xs={24} sm={24} md={14} lg={14} xl={18}>
                        <img className="user-login-left-logo" src={logo} alt="logo" />
                        <h3 className="user-login-left-logo-title" >{Lang.trans('welcome_to_fingroup')}</h3>
                    </Col>
                    <Col className={visible ? 'div-show user-login-right' : 'div-hidden user-login-right'} xs={24} sm={24} md={10} lg={10} xl={6}>
                        <h6 style={{
                            textTransform: 'uppercase'
                        }}
                            className="user-login-right-title">
                            {Lang.trans('login_to_your_account')}
                        </h6>
                        <Credenciais
                            onClick={this.submit}
                            isLoading={isLoading}
                        />
                        {/* <Tabs
                            className='user-login-right-tabs'
                        > */}
                            {/* <TabPane className='user-login-right-tabs-tabpane' tab="Credenciais" key="credenciais"> */}
                                {/* <Credenciais
                                    onClick={this.submit}
                                    isLoading={isLoading}
                                /> */}
                            {/* </TabPane> */}
                            {/* <TabPane className='user-login-right-tabs-tabpane' tab="Telefone" key="relefone">
                                <Telefone />
                            </TabPane> */}
                        {/* </Tabs> */}
                    </Col>
                </Row>

            </div >

        );
    }

}

export default UserLayout(Login);