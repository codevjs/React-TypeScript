import React from 'react';
import LayoutComponent from "../../components/layout";
import {Card, Row, Col} from "antd";

const Account: React.FC = () => {

    return (
        <LayoutComponent>
           <Row gutter={[10, 10]}>
               <Col xs={24} sm={24} md={12} >
                   <Card></Card>
               </Col>
               <Col xs={24} sm={24} md={12}>
                   <Card></Card>
               </Col>
           </Row>
        </LayoutComponent>
    )
};

export default Account;
