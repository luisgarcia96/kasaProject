import styles from '../styles/layouts/Header.module.scss'
import React from 'react';


const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                
            </div>
            <nav>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/">A Propos</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
