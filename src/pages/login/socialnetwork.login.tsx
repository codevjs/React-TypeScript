import React from 'react';
import {Button, Row, Col} from 'antd';
import {GoogleOutlined, TwitterOutlined, GithubOutlined} from '@ant-design/icons';

const SocialNetwork : React.FC = () => {

    return (
        <Row gutter={5}>
            <Col lg={8} md={24} sm={24}>
                <Button style={{width: '100%'}}>
                    <GoogleOutlined /> Google
                </Button>
            </Col>
            <Col lg={8} md={24} sm={24}>
                <Button style={{width: '100%'}}>
                    <GithubOutlined /> Github
                </Button>
            </Col>
            <Col lg={8} md={24} sm={24}>
                <Button style={{width: '100%'}}>
                    <TwitterOutlined /> Twitter
                </Button>
            </Col>
        </Row>
    )
};

export default SocialNetwork;
