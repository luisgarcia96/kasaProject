import styles from '../styles/components/Card.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardBody}>
                <h2>{title}</h2>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Card;
