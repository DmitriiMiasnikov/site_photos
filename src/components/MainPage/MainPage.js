import React, { useState } from 'react';
import styles from './MainPage.module.scss';
import classnames from 'classnames';
const mainPhotos = [
    'https://img5.goodfon.ru/original/2560x1440/9/7c/chelsea-bridge-river-thames-london-england-most-chelsi-rek-1.jpg',
    'https://img5.goodfon.ru/original/2048x1365/5/a4/rossiia-kaliningrad-alla-poliakova.jpg',
    'https://img5.goodfon.ru/original/2560x1440/2/ed/cityscape-colmar-france-canal-street-town-buildings-flowers.jpg',
    'https://img4.goodfon.ru/original/2560x1440/3/e6/london-city-uk-gb-unitedkingdom-england-photo-photography--3.jpg',
    'https://img5.goodfon.ru/original/2560x1440/3/d3/piazza-del-campo-torre-del-mangia-siena-tuscany-italy-piatst.jpg'
]
const MainPage = (props) => {
    const [activePhoto, setActivePhoto] = useState(0);
    const [shouldSlide, setshouldSlide] = useState(false);
    const slidePhoto = async () => {
        setshouldSlide(true)
        await new Promise(() => setTimeout(() => {
            setshouldSlide(false)
            setActivePhoto(activePhoto + 1);
        }, 500))
    }
    if (activePhoto === mainPhotos.length) setActivePhoto(0)
    return (
        <div className = {styles.mainPage}>
            <div className={styles.blockForPhoto}>
                {
                    mainPhotos.map((el, i) => {
                        return <div className = {classnames(styles.photo, {
                            [styles.active]: activePhoto === i,
                            [styles.slide]: activePhoto === i && shouldSlide,
                            [styles.hide]: (i !== activePhoto && i !== activePhoto + 1 && activePhoto !== mainPhotos.length - 1) || 
                                (activePhoto === mainPhotos.length - 1 && i !== mainPhotos.length - 1 && i !== 0)
                         })}
                        style={{ 'background': `url(${el}) 50% center / cover no-repeat` }}
                        onClick = {() => slidePhoto()}
                        key = {i}
                        ></div>
                    })
                }
            </div>
            <div className = {styles.description}>
                <div className = {styles.innerBlock}>
                <div className = {styles.name}>Dmitrii<br></br>Miasnikov</div>
                <div className = {styles.proff}>Frontend</div>
                </div>

            </div>
        </div>
    )
}

export default MainPage;