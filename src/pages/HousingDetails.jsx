import styles from "../styles/pages/HousingDetails.module.scss";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import mockedData from "../mocks/kasaBddMock.json";
import Carousel from "../components/Carousel";

const HousingDetails = () => {
	const [housing, setHousing] = useState(null);

	//Get id from URL
	const { id } = useParams();

	useEffect(() => {
		const foundHousing = mockedData.find((housing) => housing.id === id);
		setHousing(foundHousing);
	}, [id]);

    if (!housing) return null;

	return (
		<main className={styles.housingDetails}>
			<Carousel images={housing?.pictures} />
			<div className={styles.infoContainer}>
				<div className={styles.primaryInfo}>
					<h1 className={styles.title}>{housing?.title}</h1>
					<div className={styles.ownerInfo}></div>
				</div>
				<div className={styles.secondaryInfo}></div>
			</div>
		</main>
	);
};

export default HousingDetails;
