import React, {useState, useContext} from 'react';
import {Layout, Card, Row, Col, Divider, notification} from 'antd';
import {Redirect} from "react-router-dom";
import styles from './login.module.css';
import {Store} from 'rc-field-form/lib/interface'

// utils
import AuthFirebase from "../../utils/firebase/auth.firebase";

// component
import Container from "../../components/container";
import Banner from "./banner.login";
import MBanner from "./mbanner.login";
import FormLogin from "./form.login";
import SocialNetwork from "./socialnetwork.login";
import {AuthContext} from "../../components/context/auth.context";

const Login: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const {authenticated} = useContext<any>(AuthContext);

    /**
     * execute when form is submit
     * @param { Store } values
     */
    const onFinish = async (values: Store): Promise<any> => {
        setLoading(true);
        try {
            const auth: any = new AuthFirebase();
            await auth.signinWihtEmiailAndPassword(values.email, values.password);
        } catch (error) {
            let errorTitle: string;
            switch (error.code) {
                case 'auth/wrong-password' :
                    errorTitle = 'Wrong Password';
                    break;
                case 'auth/user-not-found' :
                    errorTitle = 'User Not Found';
                    break;
                default :
                    errorTitle = 'Sign in failed'
            }
            notification['error']({
                message: errorTitle,
                description: error.message
            });
            setLoading(false)
        }
    };

    return authenticated
        ? <Redirect to={'/manage/dashboard'}/>
        : (
            <Layout>
                <Container>
                    <Row>
                        <Col lg={{span: 8, push: 14}} md={{span: 8, push: 14}} sm={{span: 24}} xs={{span: 24}}
                             style={{height: '100vh'}}>
                            <div className={styles.cardLogin}>
                                <p className={styles.mobileHidden}>
                                    GitLab.com offers free unlimited (private) repositories
                                    and unlimited collaborators.
                                </p>
                                <Card className={styles.card}>
                                    <div className={styles.desktopHidden}>
                                        <MBanner/>
                                    </div>
                                    <h3>Sign in</h3>
                                    <FormLogin
                                        onFinish={onFinish}
                                        loading={loading}
                                    />
                                </Card>
                                <Divider style={{margin: '10px 0'}}>
                                    Or
                                </Divider>
                                <Card>
                                    <p>Sign in with</p>
                                    <SocialNetwork/>
                                </Card>
                            </div>
                        </Col>
                        <Col className={styles.mobileHidden} lg={{span: 14, pull: 10}} md={{span: 14, pull: 10}}
                             sm={{span: 24}} xs={{span: 24}} style={{height: '100vh'}}>
                            <div className={styles.cardLogin}>
                                <Banner/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        )
};

export default Login;
