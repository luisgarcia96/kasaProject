import React, { useEffect, useState } from "react";

import HomeCard from "../components/HomeCard";
import mockedData from "../mocks/kasaBddMock.json";

import styles from "../styles/pages/Home.module.scss";

const Home = () => {
	const [cardList, setCardList] = useState([]);

	//Set cardList from MockedAPI
	useEffect(() => {
		setCardList(mockedData);
	}, []);

	return (
		<main className={styles.home}>
			<div className={styles.titleContainer}>
				<h1>Chez vous, partout et ailleurs</h1>
			</div>
			<div className={styles.mainContainer}>
				{cardList.map((card, index) => (
					<HomeCard
						key={`card-${index}`}
						card={card}
					/>
				))}
			</div>
		</main>
	);
};

export default Home;
