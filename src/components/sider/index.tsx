import React from "react";
import { Layout, Menu } from 'antd';
import {
    UploadOutlined,
    VideoCameraOutlined,
    BarChartOutlined
} from '@ant-design/icons';
import styles from './sider.module.css'

const Sider : React.FC = () => {

    return (
        <Layout.Sider className={styles.sider} width={'250'}>
            <div className={styles.logo} />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <BarChartOutlined />
                    <span className="nav-text">Dashboard</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <VideoCameraOutlined />
                    <span className="nav-text">nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <UploadOutlined />
                    <span className="nav-text">nav 3</span>
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    )
};

export default Sider;
