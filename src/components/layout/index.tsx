import React from 'react';
import {Layout} from 'antd';
// style
import styles from './layout.module.css'
// component
import Sider from '../sider';
import Header from "../header";

const LayoutComponent : React.FC<Props> = ({children}) => {

    return (
        <Layout>
            <Sider />
            <Layout className={styles.layout}>
                <Header/>
                <Layout.Content className={styles.layoutContent}>
                    {children}
                </Layout.Content>
            </Layout>
        </Layout>
    )
};

interface Props {
    children : React.ReactNode
}

export default LayoutComponent;
