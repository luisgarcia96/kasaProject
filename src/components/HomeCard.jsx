import React from "react";
import PropTypes from "prop-types";

import styles from "../styles/components/HomeCard.module.scss";

const HomeCard = ({ title, onClick }) => {
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
