import styles from "../styles/components/Carousel.module.scss";
import React, { useState } from "react";
import arrowIcon from "../assets/icons/icon-arrow-2.svg";

const Carousel = ({ images }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
			<div
				onClick={handlePrevClick}
				className={`${styles.arrowContainer} ${styles.arrowBack}`}
			>
				<img src={arrowIcon} alt="previous" />
			</div>
			<img
				className={styles.image}
				src={images[currentImageIndex]}
				alt={`Pic-${currentImageIndex + 1}`}
			/>
			<div
				onClick={handleNextClick}
				className={`${styles.arrowContainer} ${styles.arrowNext}`}
			>
				<img src={arrowIcon} alt="next"  />
			</div>
		</div>
	);
};

export default Carousel;
