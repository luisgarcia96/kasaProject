import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/pages/NotFound.module.scss";

const NotFound = () => {
	return (
		<main className={styles.notFound}>
			<p className={styles.number}>404</p>
			<p className={styles.message}>
				Oups! La page que vous demandez n'existe pas.
			</p>
			<Link className={styles.goBack} to="/">
				Retourner sur la page d'accueil
			</Link>
		</main>
	);
};

export default NotFound;
