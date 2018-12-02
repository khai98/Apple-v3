import React, { Component } from 'react';
import { Form, Icon, Input, Button, Select, message } from 'antd';
import ReCAPTCHA from "react-google-recaptcha";
import * as CONST from '../../../config/constant';
import { Lang } from '../../../utils';
import { register } from '../../../endpoints/User';
import handleException from '../../../utils/handleException';
import history from '../../../utils/history';
import LoginFormFooter from '../../organisms/register/login-form-footer/LoginFormFooter';
import LocalStorage from '../../../utils/LocalStorage';

const FormItem = Form.Item;
const Option = Select.Option;
const recaptchaRef = React.createRef();

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: {},
            confirmDirty: false,
            isLoading: false,
        };
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
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '0084',
        })(
            <Select style={{ width: 70 }}>
                <Option value="0084">+84</Option>
            </Select>
        );
        return (
            <Form onSubmit={this.handleSubmit} className="register-form">
                <FormItem>
                    {getFieldDecorator('email', {
                        rules: [
                            { required: true, message: Lang.validate('701', Lang.trans('email')) },
                            { type: 'email', message: Lang.validate('702', Lang.trans('email')) },
                        ],
                    })(
                        <Input name='Email' prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder={Lang.trans('email')} />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [
                            { required: true, message: Lang.validate('701', Lang.trans('password')) },
                            { min: 6, message: Lang.validate('801', Lang.trans('password'), 6) },
                            { max: 20, message: Lang.validate('709', Lang.trans('password'), 20) },
                            { validator: this.validateToNextPassword }
                        ],
                    })(
                        <Input
                            name='password'
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder={Lang.trans('password')}
                            minLength={6}
                            maxLength={20}
                        />
                    )}
                </FormItem>

                <FormItem>
                    {getFieldDecorator('password_confirmation', {
                        rules: [
                            { required: true, message: Lang.validate('701', Lang.trans('repassword')) },
                            { validator: this.compareToFirstPassword }
                        ],
                    })(
                        <Input
                            name='password_confirmation'
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder={Lang.trans('repassword')}
                            maxLength={20}
                            onBlur={this.handleConfirmBlur}
                        />
                    )}
                </FormItem>

                <FormItem >
                    {getFieldDecorator('phone_number', {
                        rules: [
                            { required: true, message: Lang.validate('701', Lang.trans('phone_number')) },
                            { validator: this.validatePhoneNumber },
                            { min: 9, message: Lang.validate('801', Lang.trans('phone_number'), 9) },
                            { max: 20, message: Lang.validate('709', Lang.trans('phone_number'), 20) }
                        ],
                    })(
                        <Input
                            addonBefore={prefixSelector}
                            style={{ width: '100%' }}
                            placeholder={Lang.trans('phone_number')}
                            maxLength={20}
                        />
                    )}
                </FormItem>

                <FormItem >
                    {getFieldDecorator('last_name', {
                        rules: [
                            { required: true, message: Lang.validate('701', Lang.trans('last_name')) },
                        ],
                    })(
                        <Input
                            placeholder={Lang.trans('last_name')}
                            maxLength={25}
                        />
                    )}
                </FormItem>

                <FormItem >
                    {getFieldDecorator('first_name', {
                        rules: [
                            { required: true, message: Lang.validate('701', Lang.trans('first_name')) },
                        ],
                    })(
                        <Input
                            placeholder={Lang.trans('first_name')}
                            maxLength={25}
                        />
                    )}
                </FormItem>

                <FormItem >
                    {getFieldDecorator('company_name', {
                        rules: [
                            { required: true, message: Lang.validate('701', Lang.trans('company_name')) },
                        ],
                    })(
                        <Input
                            placeholder={Lang.trans('company_name')}
                            maxLength={255}
                        />
                    )}
                </FormItem>

                <FormItem >
                    {getFieldDecorator('gender', {
                        rules: [
                            { required: true, message: Lang.validate('701', Lang.trans('gender')) },
                        ],
                    })(
                        <Select placeholder={Lang.trans('gender')}>
                            <Option value='0'>{Lang.trans('other')}</Option>
                            <Option value='1'>{Lang.trans('female')}</Option>
                            <Option value='2'>{Lang.trans('male')}</Option>
                        </Select>
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
                        loading={isLoading}
                        type="primary"
                        htmlType="submit"
                        className="login-form-button">
                        {Lang.trans('signup')}
                    </Button>
                    <LoginFormFooter />
                </FormItem>
            </Form>

        );
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback(Lang.trans('err_repassword'));
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['password_confirmation'], { force: true });
        }
        callback();
    }

    validatePhoneNumber = (rule, value, callback) => {
        if (!this.checkNumber(value)) {
            callback(Lang.validate('707', Lang.trans('phone_number')));
        } else {
            callback();
        }
    }

    checkNumber = (value) => {
        let reg = new RegExp('^[0-9]+$');
        return reg.test(value);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let error = this.state.error;
        const recaptchaValue = recaptchaRef.current.getValue();
        this.props.form.validateFields((err, values) => {
            if (!err && recaptchaValue) {
                this.setState({ isLoading: true })
                this.registerUser(values);
            }
            if (!recaptchaValue) {
                error.recaptcha = 'error'
            }
            if (err) {
                let elem = document.getElementById("content-register");
                elem.scrollIntoView({ block: 'end', behavior: 'smooth' });
            }
        });

        this.setState({
            error
        })
    }

    registerUser = (values) => {
        let data = {
            last_name: values.last_name,
            email: values.email,
            password: values.password,
            // password_confirmation: values.password_confirmation,
            phone_number: '0084' + Number(values.phone_number),
            company_name: values.company_name,
            gender: Number(values.gender),
            first_name: values.first_name
        }
        register(data).then(res => {
            if (res.data.status === 0) {
                this.setState({ isLoading: false })
                message.success(Lang.trans("register_success"));
                history.push('/dang-nhap.html')
            } else {
                message.error(Lang.trans("register_error"))
                window.grecaptcha.reset();
                let errors = res.data.errors;
                let elem = document.getElementById("content-register");
                elem.scrollIntoView({ block: 'end', behavior: 'smooth' });
                Object.entries(errors).forEach(([key, value]) => {
                    switch (key) {
                        case 'password':
                            if (value[0] === '801')
                                this.setFields(key, values[key], Lang.validate(value[0], Lang.trans(key), 6))
                            this.setFields(key, values[key], Lang.validate(value[0], Lang.trans(key)))
                            break;
                        case 'phone_number':
                            if (value[0] === '801')
                                this.setFields(key, values[key], Lang.validate(value[0], Lang.trans(key), 9))
                            this.setFields(key, values[key], Lang.validate(value[0], Lang.trans(key)))
                            break;
                        default:
                            this.setFields(key, values[key], Lang.validate(value[0], Lang.trans(key)))
                            break;
                    }

                })
                this.setState({
                    isLoading: false,
                })
            }
        }).catch((error) => {
            handleException(error).next();
        })
    }

    setFields = (key, value, message) => {
        this.props.form.setFields({
            [key]: {
                value: value,
                errors: [new Error(message)],
            },
        });
    }

    onChange = (name, value) => {
        let error = this.state.error;
        switch (name) {
            case 'recaptcha':
                if (value) error.recaptcha = ''
                break;
            default:
                break;
        }
        this.setState({
            error
        })
    }
}

const WrappedNormalRegisterForm = Form.create()(RegisterForm);

export default WrappedNormalRegisterForm;