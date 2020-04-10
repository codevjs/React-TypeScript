import React from 'react';
import {Spin} from 'antd';
import styles from "./spin.module.css";

const Spinner: React.FC<Props> = ({spinning, tip}) => {

    return (
        <div className={styles.div}>
            <Spin
                className={styles.spin}
                size={"large"}
                spinning={spinning}
                tip={tip}
            />
        </div>
    )
};

interface Props {
    tip: string,
    spinning: boolean
}

export default Spinner;
