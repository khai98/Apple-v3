import React, { Component } from 'react';
import { Lang } from '../../../../utils';
import history from '../../../../utils/history';

class LoginFormFooter extends Component {
    render() {
        return (
            <div className='user-login-login-form-footer'>
                <span>{Lang.trans('loginQues')}</span>
                <a onClick={this.onClickCreateAnAccount} href='javascript:;'>{Lang.trans('create_an_account')}</a>
                <a onClick={this.onClickBackToHome} href='javascript:;'>{Lang.trans('back_to_home')}</a>
            </div>
        );
    }

    onClickBackToHome =() =>{
        history.push('/')
    }

    onClickCreateAnAccount = () =>{
        history.push('/register')
    }
}

export default LoginFormFooter;