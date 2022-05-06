import React from 'react';

// Importing Images & Icons
import Logo from '../assets/Logo.svg';
import Menu from '../assets/Menu.svg';
import SearchIcon from '../assets/icons/Search.svg';
import ShoppingBagIcon from '../assets/icons/shopping\ bag.svg';

// Importing Styles
import styles from '../scss/Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={Menu} alt="Menu" />
            <img className={styles.logo} src={Logo} alt="Logo" />
            <div className='icons'>
                <img src={SearchIcon} alt="Search Icon" />
                <img src={ShoppingBagIcon} alt="ShoppingBag Icon" />
            </div>
        </header>
    );
};

export default Header;