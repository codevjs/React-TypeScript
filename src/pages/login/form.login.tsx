import React from 'react';
import {Form, Input, Checkbox, Button, Spin} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Store} from 'rc-field-form/lib/interface'

const FormLogin: React.FC<Props> = ({onFinish, loading}) => {


    return (
        <Spin spinning={loading}>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{remember: true}}
                layout={"vertical"}
                onFinish={onFinish}
            >
                <Form.Item
                    label={'Email'}
                    name={'email'}
                    rules={[{required: true, message: 'Please input your email!'}]}
                >
                    <Input
                        prefix={<UserOutlined/>}
                        size={'large'}
                    />
                </Form.Item>
                <Form.Item
                    label={'Password'}
                    name={'password'}
                    rules={[{required: true, message: 'Please input your Password!'}]}
                >
                    <Input.Password
                        prefix={<LockOutlined/>}
                        type="password"
                        size={'large'}
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                </Form.Item>
                <Form.Item>
                    <Button
                        ghost={true}
                        type="primary"
                        htmlType="submit"
                        size={'large'}
                        style={{width: '100%'}}
                    >
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </Spin>
    )
};


interface Props {
    onFinish: (values: Store) => void;
    loading : boolean;
}

export default FormLogin;
