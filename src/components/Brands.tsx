import React from 'react';

// Importing Styles
import styles from '../scss/Brands.module.scss';

// Importing Brands' Logos
import PradaLogo from '../assets/logos/Prada.svg';
import BurburreyLogo from '../assets/logos/Burberry.svg';
import BossLogo from '../assets/logos/Boss.svg';
import CartierLogo from '../assets/logos/Catier.svg';
import GucciLogo from '../assets/logos/Gucci.svg';
import TiffanyCoLogo from '../assets/logos/Tiffany-&-Co.svg';

const Brands = () => {
    return (
        <section className={styles.brands_section}>
            <div className={styles.devider}></div>
            <section className={styles.logos_container}>
                <div className={styles.logo_wrap}>
                    <img src={PradaLogo} alt="PradaLogo" />
                </div>
                <div className={styles.logo_wrap}>
                    <img src={BurburreyLogo} alt="BurburreyLogo" />
                    </div>
                <div className={styles.logo_wrap}>
                    <img src={BossLogo} alt="BossLogo" />
                </div>
                <div className={styles.logo_wrap}>
                    <img src={CartierLogo} alt="CartierLogo" />
                </div>
                <div className={styles.logo_wrap}>
                    <img src={GucciLogo} alt="GucciLogo" />
                </div>
                <div className={styles.logo_wrap}>
                    <img src={TiffanyCoLogo} alt="TiffanyCoLogo" />
                </div>
                </section>
            <div className={styles.devider}></div>
        </section>
    );
};

export default Brands;