import styles from '../styles/components/Card.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

const HomeCard = ({ title , onClick }) => {
    return (
        <div className={styles.card} onClick={onClick}>
            <div className={styles.cardBody}>
                <h2>{title}</h2>
            </div>
        </div>
    );
};

HomeCard.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default HomeCard;
