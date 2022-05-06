import React from 'react';

// Importing Styles
import styles from '../css/Banner.module.scss';

// Importing Images
import BannerPic from '../assets/images/Banner.png';
import Typography from '../assets/images/Banner-Typography.svg';

const Banner = () => {
    return (
        <section className={styles.banner_section}>
            <img 
                className={styles.banner_pic} 
                src={BannerPic} 
                alt="Banner" 
            />
            <img 
                className={styles.banner_typography} 
                src={Typography} 
                alt="" 
            />
            <button type='button'>
                EXPLORE COLLECTION
            </button>
            <div className={styles.slider_dots}>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
            </div>
        </section>
    );
};

export default Banner;