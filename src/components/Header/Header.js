import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
const links = {
    main: 'Main page',
    nature: 'Nature',
    arch: 'Architecture',
    aboutme: 'About me'
}
const Header = () => {
    return (
        <div className={styles.header}>
            <div className = {styles.links}>
            {
                Object.keys(links).map((el, i) => {
                    return <NavLink to={`/${el}`} activeClassName={styles.active} className={styles.link} key={i}>
                        {Object.values(links)[i]}
                    </NavLink>
                })
            }
            </div>
        </div>
    )
}

export default Header;