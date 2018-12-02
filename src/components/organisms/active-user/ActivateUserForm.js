import React, { Component } from 'react';
import { Form, Icon, Input, Button, Select, message } from 'antd';
import { Lang } from '../../../utils';
import ReCAPTCHA from "react-google-recaptcha";
import * as CONST from '../../../config/constant';
import { activeUser } from '../../../endpoints/User';
import Session from '../../../utils/Session';
import handleException from '../../../utils/handleException';
import LoginFormFooter from '../../organisms/active-user/login-form-footer/LoginFormFooter';
import LocalStorage from '../../../utils/LocalStorage';

const FormItem = Form.Item;
const Option = Select.Option;
const recaptchaRef = React.createRef();

class ActivateUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: {},
            isLoading: false
        }
        let lang = LocalStorage.get("lang")
        window.recaptchaOptions = {
            lang: lang,
            useRecaptchaNet: true,
            removeOnUnmount: false,
        };
    }

    render() {
        let { error, isLoading } = this.state;
        const { getFieldDecorator } = this.props.form;
        const phoneNumber = Session.get().user.phone_number.replace('0084', '0');
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '0084',
        })(
            <Select disabled style={{ width: 70 }}>
                <Option value="0084">+84</Option>
            </Select>
        );
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem >
                    <Input
                        addonBefore={prefixSelector}
                        style={{ width: '100%' }}
                        placeholder={Lang.trans('phone_number')}
                        maxLength={20}
                        name='phone_number'
                        value={phoneNumber}
                        disabled
                    />
                </FormItem>
                <FormItem>
                    {getFieldDecorator('verify_code', {
                        rules: [
                            { required: true, message: Lang.validate('701', Lang.trans('verify_code')) },
                            { validator: (rule, value, callback) => this.validateNumber('verify_code', rule, value, callback) }
                        ],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder={Lang.trans('verify_code')}
                            maxLength={6}
                        />

                    )}
                </FormItem>

                <div
                    className='ant-damnx-recaptcha'
                >
                    <ReCAPTCHA
                        sitekey={CONST.SITEKEY_RECAPTCHA}
                        onChange={(value) => this.onChange('recaptcha', value)}
                        size='normal'
                        badge='bottomleft'
                        ref={recaptchaRef}
                    />
                    {error && error.recaptcha ? <div className="ant-damnx-form-explain">{Lang.validate("701", Lang.trans("security_code"))}</div> : null}

                </div>
                <FormItem>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        loading={isLoading}
                    >
                        {Lang.trans('active_code')}
                    </Button>
                    <LoginFormFooter />
                </FormItem>
            </Form>
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const recaptchaValue = recaptchaRef.current.getValue();
        let error = this.state.error;
        let session = Session.get();
        this.props.form.validateFields((err, values) => {
            if (!err && recaptchaValue) {
                let data = {
                    verify_code: values.verify_code,
                    access_token: session.token.access_token
                }
                this.active(data);
            }

            if (!recaptchaValue) {
                error.recaptcha = 'error'
            }
        });

        this.setState({
            error
        })
    }

    checkNumber = (value) => {
        let reg = new RegExp('^[0-9]+$');
        return reg.test(value);
    }

    validateNumber = (name, rule, value, callback) => {
        if (!this.checkNumber(value)) {
            callback(Lang.validate('707', Lang.trans(name)));
        } else {
            callback();
        }

    }

    onChange = (name, value) => {
        let error = this.state.error;
        if (name === 'recaptcha' && value) {
            error.recaptcha = ''
        }

        this.setState({
            error
        })
    }

    active = (data) => {
        this.setState({
            isLoading: true
        })
        activeUser(data).then(res => {
            if (res.data.status === 0) {
                let session = Session.get();
                session.user.is_active = true
                Session.set(session)
                this.setState({
                    isLoading: false
                })
                message.success(Lang.trans('active_code_success'));
                this.props.onClick();
            } else {
                message.error(Lang.trans('verify_code_err'));
                this.setState({
                    isLoading: false
                })
                window.grecaptcha.reset();
            }
        }).catch((error) => {
            handleException(error).next();
        })
    }
}

const WrappedNormalLoginForm = Form.create()(ActivateUserForm);

export default WrappedNormalLoginForm;