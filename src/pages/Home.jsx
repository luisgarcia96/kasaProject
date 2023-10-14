import styles from "../styles/pages/Home.module.scss";
import React from "react";

const Home = () => {
	return (
		<div className={styles.home}>
			<div className={styles.titleContainer}>
				<h1>Chez vous, partout et ailleurs</h1>
			</div>
			<div className={styles.mainContainer}></div>
		</div>
	);
};

export default Home;
