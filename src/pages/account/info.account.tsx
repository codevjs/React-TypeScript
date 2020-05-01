import React, {useState} from 'react';
import {Avatar, Form, Input, Button, Badge, Upload, message, Spin} from "antd";
import {CameraOutlined} from '@ant-design/icons';

const InfoAccount: React.FC<Props>
    = ({ photoURL, displayName, phoneNumber, email, status}) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [image, ]             = useState<string>(photoURL);
    const [config, ]             = useState<Config>({
        name           : 'picture',
        action         : '',
        showUploadList : false,
        multiple       : false,
        accept         : 'image/*',
        onChange(info  : any): void {
            if (info.file?.status === 'uploading') {
                setLoading(true);
            }
            if (info.file.status === 'done') {
                setLoading(false);
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                setLoading(false);
                message.error(`${info.file.name} file upload failed.`);
            }
        }
    });

    return (
        <div>
            <Spin spinning={loading}>
                <section style={{textAlign: 'center', height: 132}}>
                    <Upload {...config}>
                        <Badge offset={[-20, 115]} count={<Button shape={'circle'} type={'primary'}><CameraOutlined/></Button>}>
                            <Avatar size={120} src={image}/>
                        </Badge>
                    </Upload>
                </section>
            </Spin>

            <section style={{marginTop: 20}}>
                <Form layout={'vertical'} initialValues={{
                    displayName,
                    email,
                    phoneNumber,
                    status
                }}>
                    <Form.Item
                        label="Name"
                        name="displayName"
                        rules={[{required: true, message: 'Please input your name!'}]}
                    >
                        <Input size={'large'}/>
                    </Form.Item>
                    <Form.Item
                        label="Phone Number"
                        name="phoneNumber"
                        rules={[{required: true, message: 'Please input your phone number!'}]}
                    >
                        <Input size={'large'}/>
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{required: false, message: 'Please input your email!'}]}
                    >
                        <Input readOnly={true} size={'large'}/>
                    </Form.Item>
                    <Form.Item
                        label="User Type"
                        name="status"
                        rules={[{required: false, message: 'Please input your user type!'}]}
                    >
                        <Input readOnly={true} size={'large'}/>
                    </Form.Item>
                    <Form.Item style={{marginTop: 20, textAlign: 'right'}}>
                        <Button disabled={loading} type="primary" htmlType="submit" style={{width: '30%'}}>
                            Save
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        </div>
    )
};

type Config = {
    name                : string,
    action              : string,
    showUploadList      : boolean,
    multiple            : boolean,
    accept              : string,
    onChange(info: any) : void
}

interface Props {
    photoURL    : string,
    email       : string,
    displayName : string,
    phoneNumber : string,
    status      : string
}

export default InfoAccount;
