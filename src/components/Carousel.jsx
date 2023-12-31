import React, { useState } from "react";
import PropTypes from "prop-types";

import arrowIcon from "../assets/icons/icon-arrow-2.svg";

import styles from "../styles/components/Carousel.module.scss";

const Carousel = ({ images }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const isOnlyImage = images.length === 1;

	const handlePrevClick = () => {
		setCurrentImageIndex(
			currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
		);
	};

	const handleNextClick = () => {
		setCurrentImageIndex(
			currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
		);
	};

	return (
		<div className={styles.carousel}>
			{!isOnlyImage && (
				<div
					onClick={handlePrevClick}
					className={`${styles.arrowContainer} ${styles.arrowBack}`}
				>
					<img src={arrowIcon} alt="previous" />
				</div>
			)}
			<img
				className={styles.image}
				src={images[currentImageIndex]}
				alt={`Pic-${currentImageIndex + 1}`}
			/>
			{!isOnlyImage && (
				<div className={styles.counter}>
					{currentImageIndex + 1}/{images.length}
				</div>
			)}
			{!isOnlyImage && (
				<div
					onClick={handleNextClick}
					className={`${styles.arrowContainer} ${styles.arrowNext}`}
				>
					<img src={arrowIcon} alt="next" />
				</div>
			)}
		</div>
	);
};

Carousel.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
