import React from 'react';
import { Form, Input, Button} from "antd";

const PassAccount : React.FC = () => {

    return (
        <Form  layout={'vertical'}>
            <Form.Item
                label="New Password"
                name="password"
                rules={[{ required: true, message: 'Please input your new password!' }]}
            >
                <Input size={'large'} />
            </Form.Item>
            <Form.Item
                label="Re Password"
                name="rePassword"
                rules={[{ required: true, message: 'Please input your new password!' }]}
            >
                <Input size={'large'} />
            </Form.Item>
            <Form.Item style={{marginTop: 20, textAlign: 'right'}}>
                <Button type="primary" htmlType="submit">
                    Change Password
                </Button>
            </Form.Item>
        </Form>
    )
};

export default PassAccount;
