import React, {useContext} from 'react';
import {Card, Row, Col} from "antd";
import {DashboardContainer as Container } from "containers";
import {Auth} from "modules";

// component
import InfoAccount from "./info.account";
import PassAccount from "./pass.account";

const Account: React.FC = () => {

    const {user} = useContext(Auth.AuthContext);

    return (
        <Container
            title={"My Account"}
            breadcrumb={['Dashboard', 'setting', 'My Account']}
        >
           <Row gutter={[10, 10]}>
               <Col xs={24} sm={24} md={12} >
                   <Card>
                       <h4>Info Account</h4>
                       <InfoAccount
                           photoURL={user.photoURL}
                           displayName={user.displayName}
                           phoneNumber={user.phoneNumber}
                           email={user.email}
                           status={user.status}
                       />
                   </Card>
               </Col>
               <Col xs={24} sm={24} md={12}>
                   <Card>
                       <h4>Password Account</h4>
                       <PassAccount />
                   </Card>
               </Col>
           </Row>
        </Container>
    )
};

export default Account;
