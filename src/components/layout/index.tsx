import React from 'react';
import {Layout} from 'antd';
// component
import Sider from '../sider';
import Header from "../header";

const LayoutComponent : React.FC<Props> = ({children}) => {

    return (
        <Layout>
            <Sider />
            <Layout style={{ marginLeft: 250 }}>
                <Header/>
                {children}
            </Layout>
        </Layout>
    )
};

interface Props {
    children : React.ReactNode
}

export default LayoutComponent;
