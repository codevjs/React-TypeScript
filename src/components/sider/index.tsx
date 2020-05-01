import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Layout, Menu, Button} from 'antd';
import {BarChartOutlined, PicLeftOutlined, PicRightOutlined, SettingFilled} from '@ant-design/icons';
// style
import styles from './sider.module.css'

const Sider: React.FC = () => {

    const [rootSubMenuKeys, ]                   = useState<string[]>(['setting']);
    const [openKeys, setOpenKeys]               = useState<string[]>([]);
    const [selectedKeys, setSelectedKeys]       = useState<string>('');
    const [collapse, setCollapse]               = useState<boolean>(false);

    useEffect(() => {
        let pathname : string = window.location.pathname;
        setSelectedKeys(pathname);
        setOpenKeys([pathname.split("/")[2]]);
    }, []);

    const onBreakpoint = (broken: boolean): void => {
        setCollapse(broken)
    };

    const onTrigger = (): void => {
        setCollapse(prevState => !prevState)
    };

    const onOpenChange = (keys : string[]) : void => {
        const latestOpenKey : string | undefined = keys.find(key => openKeys.indexOf(key) === -1);
        if (latestOpenKey){
            if (rootSubMenuKeys.indexOf(latestOpenKey) === -1) {
                setOpenKeys(openKeys)
            }else{
                setOpenKeys( [latestOpenKey])
            }
        }else{
            setOpenKeys( [])
        }
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
                <Button shape={'circle'} size={'large'} onClick={onTrigger}>
                    {!collapse ? <PicLeftOutlined/> : <PicRightOutlined/>}
                </Button>
            </div>
            <div className={styles.logo} />
            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={[selectedKeys]}
                openKeys={openKeys}
                onOpenChange={onOpenChange}
            >
                <Menu.Item>
                    <h4>Main menu</h4>
                </Menu.Item>

                <Menu.Item key="/manage/dashboard">
                    <Link to={'/manage/dashboard'}>
                        <BarChartOutlined/>
                        <span className="nav-text">Dashboard</span>
                    </Link>
                </Menu.Item>

                <Menu.SubMenu
                    key={'setting'}
                    title={
                        <span>
                          <SettingFilled/>
                          <span>Setting</span>
                        </span>
                    }
                >
                    <Menu.Item key="/manage/setting/account">
                        <Link to={'/manage/setting/account'}>
                            <span className="nav-text">My Account</span>
                        </Link>
                    </Menu.Item>
                </Menu.SubMenu>
            </Menu>
        </Layout.Sider>
    )
};

export default Sider;
