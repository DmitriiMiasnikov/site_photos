import React from 'react';
import styles from './MainPage.module.scss';
const mainPhotos = [
    'https://img5.goodfon.ru/original/2560x1440/9/7c/chelsea-bridge-river-thames-london-england-most-chelsi-rek-1.jpg',
    'https://img5.goodfon.ru/original/2048x1365/5/a4/rossiia-kaliningrad-alla-poliakova.jpg',
    'https://img5.goodfon.ru/original/2560x1440/2/ed/cityscape-colmar-france-canal-street-town-buildings-flowers.jpg',
    'https://img4.goodfon.ru/original/2560x1440/3/e6/london-city-uk-gb-unitedkingdom-england-photo-photography--3.jpg',
    'https://img5.goodfon.ru/original/2560x1440/3/d3/piazza-del-campo-torre-del-mangia-siena-tuscany-italy-piatst.jpg'
]
const MainPage = (props) => {
    return (
        <div className = {styles.mainPage}>
            <div className={styles.blockForPhoto}>
                {
                    mainPhotos.map((el, i) => {
                        return <div className = {`${styles.photo} ${styles.photo}-${i}`} 
                        style={{ 'background': `url(${el}) 50% center / cover no-repeat` }}
                        ></div>
                    })
                }
            </div>
        </div>
    )
}

export default MainPage;