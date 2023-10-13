import styles from "../styles/pages/NotFound.module.scss";
import { Link } from "react-router-dom";
import React from "react";

const NotFound = () => {
	return (
		<div className={styles.notFound}>
			<p className={styles.number}>404</p>
			<p className={styles.message}>
				Oups! La page que vous demandez n'existe pas.
			</p>
			<Link className={styles.goBack} to="/">
				Retourner sur la page d'accueil
			</Link>
		</div>
	);
};

export default NotFound;
