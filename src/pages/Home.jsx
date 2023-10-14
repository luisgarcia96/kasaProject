import styles from "../styles/pages/Home.module.scss";
import React from "react";
import Card from "../components/Card";

const Home = () => {
	return (
		<div className={styles.home}>
			<div className={styles.titleContainer}>
				<h1>Chez vous, partout et ailleurs</h1>
			</div>
			<div className={styles.mainContainer}>
				{[0, 1, 2, 3, 4, 5].map((card, index) => (
					<Card
						key={`card-${index}`}
						title="Titre de la location"
						image="https://picsum.photos/200/300"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quae."
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
