import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "../styles/components/HomeCard.module.scss";

const HomeCard = ({ card }) => {
	const { id, title, cover } = card;

	return (
		<Link to={`housing/${id}`} className={styles.card}>
			<img className={styles.cover} src={cover} alt={title} />
			<h2 className={styles.title}>{title}</h2>
		</Link>
	);
};

HomeCard.propTypes = {
	card: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		cover: PropTypes.string,
	}),
};

HomeCard.defaultProps = {
	title: "",
	onClick: () => {},
};

export default HomeCard;
