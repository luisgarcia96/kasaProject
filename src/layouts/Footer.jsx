import React from 'react';
import styles from '../styles/layouts/Footer.module.scss';
import { Link } from 'react-router-dom';
//import logo
import whiteLogo from '../assets/logos/logo-white.svg';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logoContainer}>
                <Link to="/">
                    <img src={whiteLogo} alt="Kasa logo" />
                </Link>
            </div>
            <p className={styles.copyright}>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
