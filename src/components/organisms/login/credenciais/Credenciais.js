import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import './Credenciais.css';
import LoginFormFooter from '../../../organisms/login/login-form-footer/LoginFormFooter';
import {Lang} from '../../../../utils'


const FormItem = Form.Item;
// const recaptchaRef = React.createRef();

class Credenciais extends Component {
    constructor(props) {
        super(props);


        this.state = {
            error: {}
        }
    }

    handleSubmit = (e) => {
        // let error = this.state.error;
        // const recaptchaValue = recaptchaRef.current.getValue();
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onClick(values)
            }
            // else {
            //     error.recaptcha = 'error'
            // }
        });

        // this.setState({
        //     error
        // })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        let { isLoading } = this.props;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{
                            type: 'email', message: Lang.validate('702', Lang.trans('email')),
                        }, {
                            required: true, message: Lang.validate('701', Lang.trans('email')),
                        }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder={Lang.trans('email')}
                            name='username'
                        />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: Lang.validate('701', Lang.trans('password')),
                        }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder={Lang.trans('password')}
                            name='password'
                        />
                    )}
                </FormItem>

                <div
                    className='ant-damnx-recaptcha'
                >
                    {/* <ReCAPTCHA
                        sitekey={CONST.SITEKEY_RECAPTCHA}
                        onChange={(value) => this.onChange('recaptcha', value)}
                        size='normal'
                        badge='bottomleft'
                        ref={recaptchaRef}
                    />
                    {error && error.recaptcha ? <div className="ant-damnx-form-explain">Please input your Password!</div> : null} */}

                </div>

                <FormItem>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        disabled={isLoading}
                    >
                        {Lang.trans('signin')}
                    </Button>
                    <LoginFormFooter />
                </FormItem>

            </Form>
        );
    }

    // onChange = (name, value) => {
    //     let error = this.state.error;
    //     if (name === 'recaptcha' && value) {
    //         error.recaptcha = ''
    //     }

    //     this.setState({
    //         error
    //     })
    // }
}

const WrappedNormalLoginForm = Form.create()(Credenciais);

export default WrappedNormalLoginForm;