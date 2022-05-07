import React from 'react';

// Importing Styles
import styles from '../scss/Collections.module.scss';

// Importing Images & Icons
import OctoberCollectionBanner from '../assets/image 12.png';
import AutumnCollectionBanner from '../assets/Frame3.png';
import VideoPoster from '../assets/video.png';
import Typography_1 from '../assets/Group.svg';
import Typography_2 from '../assets/Group2.svg';
import PlayIcon from '../assets/icons/Play.svg';

const Collections = () => {
    return (
        <section className={styles.collections_section}>
            <h1 className={styles.heading}>
                COLLECTIONS
            </h1>
            <div className={styles.banner_wrap}>
                <img src={OctoberCollectionBanner} alt="October Collection Banner" />
                <img src={Typography_1} alt="Typography" />
            </div>
            <div className={styles.banner_wrap}>
                <img src={AutumnCollectionBanner} alt="Autumn Collection Banner" />
                <img src={Typography_2} alt="Typography" />
            </div>
            <section className={styles.video_wrap}>
                <img src={VideoPoster} alt="Video Poster" />
                <img src={PlayIcon} alt="Play Icon" />
            </section>
        </section>
    );
};

export default Collections;