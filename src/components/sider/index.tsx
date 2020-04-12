import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Layout, Menu, Button} from 'antd';
import {UserOutlined, BarChartOutlined, MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
// style
import styles from './sider.module.css'

const Sider: React.FC = () => {

    const [selected, setSelected] = useState<string>('');
    const [collapse, setCollapse] = useState<boolean>(false);

    useEffect(() => {
        setSelected(window.location.pathname);
    }, []);

    const onBreakpoint = (broken : boolean) : void => {

        setCollapse(broken)
    };

    const changeCollapse = () : void => {

        setCollapse( prevState  =>  !prevState)
    };

    return (
        <Layout.Sider
            collapsed={collapse}
            breakpoint={"lg"}
            collapsedWidth={0}
            className={styles.sider}
            width={'250'}
            trigger={null}
            onBreakpoint={onBreakpoint}
        >
            <div className={styles.buttonCollapse}>
                <Button shape={'circle'} size={'large'} onClick={changeCollapse}>
                    {
                        collapse ?  <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                    }

                </Button>
            </div>
            <div className={styles.logo}/>
            <Menu theme="dark" mode="inline" selectedKeys={[selected]}>
                <Menu.Item>
                    <h4>Main menu</h4>
                </Menu.Item>
                <Menu.Item key="/manage/dashboard">
                    <Link to={'/manage/dashboard'}>
                        <BarChartOutlined/>
                        <span className="nav-text">Dashboard</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <UserOutlined />
                    <span className="nav-text">My Account</span>
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    )
};

export default Sider;
