import React from 'react';

// Importing Styles
import styles from '../scss/NewArrival.module.scss';

// Importing Images & Logos
import Img1 from '../assets/img-1.svg';
import Img2 from '../assets/img-2.svg';
import Img3 from '../assets/img-3.svg';
import Img4 from '../assets/img-4.svg';
import ArrowRight from '../assets/icons/Forward-Arrow.svg';

const NewArrival = () => {
    return (
        <section className={styles.new_arrival_section}>
            <h1>NEW ARRIVAL</h1>
            <ul className={styles.tabs_buttons}>
                <li>All</li>
                <li>Apparel</li>
                <li>Dress</li>
                <li>Tshirt</li>
                <li>Bag</li>
            </ul>
            <div className={styles.cards_container}>
                <div className={styles.product_card}>
                    <img src={Img1} alt="Product One" />
                    <h6>21WN reversible angora cardigan</h6>
                    <p>$120</p>
                </div>
                <div className={styles.product_card}>
                    <img src={Img2} alt="Product Two" />
                    <h6>21WN reversible cardigan</h6>
                    <p>$120</p>
                </div>
                <div className={styles.product_card}>
                    <img src={Img3} alt="Product Three" />
                    <h6>21WN reversible cardigan</h6>
                    <p>$120</p>
                </div>
                <div className={styles.product_card}>
                    <img src={Img4} alt="Product Four" />
                    <h6>Oblang bag</h6>
                    <p>$120</p>
                </div>
            </div>
            <button type='button'>
                <span>
                    Explore More
                </span>
                <img src={ArrowRight} alt="Arrow Right Icon" />
            </button>
        </section>
    );
};

export default NewArrival;