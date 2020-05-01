import React from "react";
import styles from "./container.module.css"

const Container : React.FC<Props> = ({children}) => {

    return (
        <div className={styles.container}>
            {children}
        </div>
    )
};

interface Props {
  children : React.ReactNode;
}

export default Container;
