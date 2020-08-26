import React from 'react';
import styles from './AboutmePage.module.scss';
import aboutme from './../../assets/img/aboutme.jpg';

const AboutmePage = () => {
    return (
        <div className = {styles.aboutme}>
            <img src={aboutme} className = {styles.image}></img>
            <div className = {styles.textAboutMe}>
                <div className = {styles.title}>About me</div>
                <div className = {styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </div>
            </div>
            <div className = {styles.contacts}>my mail and phone number</div>
        </div>
    )
}

export default AboutmePage;