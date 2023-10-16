import React from "react";
import PropTypes from "prop-types";

import styles from "../styles/components/Rating.module.scss";

const Rating = ({ rating }) => {
	const totalStars = 5;

	return (
		<div className={styles.rating}>
			{[...Array(totalStars)].map((star, index) => (
				<span
					key={index}
					className={`${styles.star} ${index < rating && styles.star_filled}`}
				>
					&#9733; {/* Unicode star character */}
				</span>
			))}
		</div>
	);
};

Rating.propTypes = {
	rating: PropTypes.number.isRequired,
};

Rating.defaultProps = {
	rating: 0,
};

export default Rating;
