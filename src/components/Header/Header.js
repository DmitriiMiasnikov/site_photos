import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className={styles.header}>
            {
                Object.keys(props.links).map((el, i) => {
                    return <NavLink to={`/${el}`} activeClassName={styles.active} className={styles.link} key={i}>
                        {Object.values(props.links)[i]}
                    </NavLink>
                })
            }
        </div>
    )
}

export default Header;