import React, { useState } from "react";
import PropTypes from "prop-types";

import arrowIcon from "../assets/icons/icon-arrow-1.svg";

import styles from "../styles/components/Accordion.module.scss";

const Accordion = ({ title, text, equipments }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.accordion}>
			<div className={`${styles.header} ${isOpen && styles.header_open}`}>
				<h2>{title}</h2>
				<div className={styles.arrowContainer} onClick={handleClick}>
					<img
						src={arrowIcon}
						alt="Arrow icon"
						className={`${styles.arrow} ${isOpen && styles.arrow_open}`}
					/>
				</div>
			</div>
			<div className={`${styles.body} ${isOpen && styles.body_open} `}>
				{text && (
					<div className={styles.description}>
						<p className={styles.paragraph}>{text}</p>
					</div>
				)}
				{equipments && (
					<ul className={styles.equipments}>
						{equipments.map((equipment, index) => (
							<li className={styles.paragraph} key={index}>
								{equipment}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

Accordion.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string,
	equipements: PropTypes.arrayOf(PropTypes.string),
};

Accordion.defaultProps = {
	title: "",
	text: "",
	equipments: null,
};

export default Accordion;
