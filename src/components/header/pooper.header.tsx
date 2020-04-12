import React from 'react';
import {Button, Divider, Avatar} from "antd";
import {Link} from "react-router-dom";
import styles from './header.module.css'

const PooperContent: React.FC<Props> = ({displayName, email, photoURL, signOut}) => {

    return (
        <ul className={styles.ul}>
            <li>
                <div style={{textAlign: 'center', paddingTop: 10}}>
                    <Avatar src={photoURL} size={74}/>
                    <h3 style={{marginBottom: -3, marginTop: 15}}>{displayName || 'Anonim'}</h3>
                    <b>{email}</b>
                    <Link to={'/manage/setting/account'}>
                        <Button ghost={false} shape={'round'} type={'primary'} style={{width: '80%', marginTop: 20}}>
                            Manage Account
                        </Button>
                    </Link>
                </div>
            </li>
            <li>
                <Divider/>
                <div style={{textAlign: 'center'}}>
                    <Button ghost={false}  style={{width: '80%'}} onClick={signOut}>
                        Logout
                    </Button>
                </div>
            </li>
        </ul>
    )
};

interface Props {
    displayName: string,
    email: string,
    photoURL: string,
    signOut: () => void
}

export default PooperContent

