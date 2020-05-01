import React from 'react';
import {Layout, Breadcrumb, Row, Col} from 'antd';
import {Sider, Header} from 'components';

// style
import styles from './layout.module.css'

const LayoutComponent: React.FC<Props> = ({children, title, breadcrumb}) => {
    return (
        <Layout>
            <Sider/>
            <Header/>
            <Layout className={styles.layout}>
                <Layout.Content className={styles.layoutContent}>
                    <Row style={{margin : '10px 0'}}>
                        <Col md={12} sm={24} xs={24}>
                            <h1>{title}</h1>
                        </Col>
                        <Col md={12} style={{textAlign: 'right'}} sm={24} xs={24}>
                            <Breadcrumb>
                                {
                                    breadcrumb.map((item) => (
                                        <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
                                    ))
                                }
                            </Breadcrumb>
                        </Col>
                    </Row>
                    {children}
                </Layout.Content>
            </Layout>
        </Layout>
    )
};

interface Props {
    children: React.ReactNode,
    title : string,
    breadcrumb : string[]
}

export default LayoutComponent;
