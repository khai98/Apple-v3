import React, { Component } from 'react';
import { Lang } from '../../../../utils';
import history from '../../../../utils/history';

class LoginFormFooter extends Component {
    // constructor(props) {
    //     super(props);

    // }

    render() {
        return (
            <div className='user-login-login-form-footer'>
                <a onClick={this.onClickBackToHome} href='javascript:;'>{Lang.trans('back_to_home')}</a>
            </div>
        );
    }

    onClickBackToHome =() =>{
        history.push('/')
    }

    // onClickCreateAnAccount = () =>{
    //     history.push('/dang-nhap.html')
    // }
}

export default LoginFormFooter;