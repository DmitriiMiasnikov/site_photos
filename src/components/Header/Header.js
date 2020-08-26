import React from 'react';
import styles from './Header.module.scss';

const Header = (props) => {
    return (
        <div className={styles.header}>
            {
                props.links.map((el, i) => {
                    return <div className={styles.link} key={i}>{el}</div>
                })
            }
        </div>
    )
}

export default Header;