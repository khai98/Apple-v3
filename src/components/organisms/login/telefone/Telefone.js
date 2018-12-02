import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, InputNumber } from 'antd';
import LoginFormFooter from '../../component/login-form-footer/LoginFormFooter';
import './Telefone.css';

const FormItem = Form.Item;



class Telefone extends Component {
    constructor(props) {
        super(props);

    }



    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }



    render() {
        const { getFieldDecorator, } = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem

                >

                    {getFieldDecorator('phone_number', {
                        rules: [
                            { required: true, message: 'Please input your phone number!' },
                            { max: 10, message: 'Max phone number 10!' },
                        ],
                    })(
                        <Input
                            addonBefore="+84"
                            placeholder="Phone Number"
                            name='phone_number'

                        />
                        // <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Phone Number" />
                    )}
                </FormItem>

                <FormItem

                >
                    {getFieldDecorator('code', {
                        rules: [
                            { required: true, message: 'Please input your Code!' },
                            { max: 6, message: 'Max code 6!' },
                        ],
                    })(
                        <Input
                            placeholder="Code"
                            name='code'
                        />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                    <LoginFormFooter />
                </FormItem>
                <FormItem>

                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(Telefone);

export default WrappedNormalLoginForm;