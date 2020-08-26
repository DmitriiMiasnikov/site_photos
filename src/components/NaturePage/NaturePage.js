import React, { useState, useEffect, useRef } from 'react';
import styles from './NaturePage.module.scss';
import classnames from 'classnames';
const naturePhotos = [
    'https://img5.goodfon.ru/original/2048x1300/1/7a/les-priroda-leto-13.jpg',
    'https://img5.goodfon.ru/original/2560x1440/4/e6/most-reka-priroda.jpg',
    'https://img5.goodfon.ru/original/2560x1440/3/7c/les-reka-osen-19.jpg',
    'https://img5.goodfon.ru/original/2560x1440/6/c9/utro-v-lesu-tuman-osen-doroga.jpg',
    'https://img5.goodfon.ru/original/2560x1440/0/fb/priroda-leto-reka-bereg-les-sklon-derevia.jpg',
    'https://img5.goodfon.ru/original/1920x1080/a/e0/field-trees-mist-grass-sky-landscape-nature.jpg'
]

const NaturePage = () => {
    const [sceneWidth, setSceneWidth] = useState(0);
    const [pictureWidth, setPictureWidth] = useState(0);
    const sceneRef = useRef(null);
    const pictureRef = useRef(null);
    const [activePhoto, setActivePhoto] = useState(1);
    const [photoOffest, setPhotoOffest] = useState(-750);
    const [shouldSlide, setshouldSlide] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    useEffect(() => {
        setSceneWidth(sceneRef.current.offsetWidth)
    }, [])
    useEffect(() => {
        setPictureWidth(pictureRef.current.offsetWidth)
    }, [])
    useEffect(() => {
        setPhotoOffest(((sceneWidth - pictureWidth) / 2) - pictureWidth)
    }, [pictureWidth])
    const slidePhoto = async (item) => {
        if (activePhoto === item) {
            setShowOverlay(true)
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
    return (
        <div className={styles.naturePage}>
            <div className={styles.blockForPhoto} ref = {sceneRef}>
                <div className={styles.photoWrapper} style={{ left: photoOffest }}>
                    {
                        naturePhotos.map((el, i) => {
                            return <img className={classnames(styles.photo, {
                                [styles.slide]: activePhoto === i && shouldSlide,
                                [styles.animation]: shouldSlide,
                            })}
                                src={el}
                                onClick={() => slidePhoto(i)}
                                key={i}
                                alt={'acrhitecture_photo'}
                                ref = {activePhoto === i ? pictureRef : null}
                            ></img>
                        })
                    }
                </div>
            </div>
            <div className={styles.description}>
                <div className={styles.title}>Nature</div>
                <div className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </div>
            </div>
            <div className={classnames(styles.overlayWrapper, { [styles.hide]: !showOverlay })}>
                <div className={styles.overlay} onClick={() => setShowOverlay(false)}></div>
                <div className={styles.picture}
                    style={{ 'background': `url(${naturePhotos[activePhoto]}) no-repeat 100% / 100%` }}></div>
            </div>
        </div>
    )
}

export default NaturePage;