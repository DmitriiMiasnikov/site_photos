import React, { useState } from 'react';
import styles from './ArchPage.module.scss';
import classnames from 'classnames';
const archPhotos = [
    'https://img5.goodfon.ru/original/2560x1440/9/7c/chelsea-bridge-river-thames-london-england-most-chelsi-rek-1.jpg',
    'https://img5.goodfon.ru/original/2048x1365/5/a4/rossiia-kaliningrad-alla-poliakova.jpg',
    'https://img5.goodfon.ru/original/2560x1440/2/ed/cityscape-colmar-france-canal-street-town-buildings-flowers.jpg',
    'https://img4.goodfon.ru/original/2560x1440/3/e6/london-city-uk-gb-unitedkingdom-england-photo-photography--3.jpg',
    'https://img5.goodfon.ru/original/2560x1440/3/d3/piazza-del-campo-torre-del-mangia-siena-tuscany-italy-piatst.jpg'
]
const ArchPage = () => {
    const [activePhoto, setActivePhoto] = useState(1);
    const [photoOffest, setPhotoOffest] = useState(-750);
    const [shouldSlide, setshouldSlide] = useState(false);
    const slidePhoto = async (item) => {
        if (activePhoto === item) {
            return
        } else {
            setshouldSlide(true)
            if (item > activePhoto) {
                setPhotoOffest(photoOffest - 950)
            } else setPhotoOffest(photoOffest + 950)
            await new Promise(() => setTimeout(() => {
                setshouldSlide(false)
                setActivePhoto(item);
            }, 500))
        }
    }
    if (activePhoto === archPhotos.length) setActivePhoto(0)
    return (
        <div className={styles.archPage}>
            <div className={styles.blockForPhoto}>
                <div className={styles.photoWrapper} style={{ left: photoOffest }}>
                    {
                        archPhotos.map((el, i) => {
                            return <img className={classnames(styles.photo, {
                                [styles.active]: activePhoto === i,
                                [styles.slide]: activePhoto === i && shouldSlide,
                            })}
                                src={el}
                                onClick={() => slidePhoto(i)}
                                key={i}
                                alt={'acrhitecture_photo'}
                            ></img>
                        })
                    }
                </div>
            </div>
            <div className={styles.description}>
                <div className={styles.title}> Architecture</div>
                <div className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </div>
            </div>
        </div>
    )
}

export default ArchPage;