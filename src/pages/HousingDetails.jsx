import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Carousel from "../components/Carousel";
import TagList from "../components/TagList";
import mockedData from "../mocks/kasaBddMock.json";

import styles from "../styles/pages/HousingDetails.module.scss";
import Rating from "../components/Rating";

const HousingDetails = () => {
	const [housing, setHousing] = useState(null);

	//Get id from URL
	const { id } = useParams();

	//Serach for housing in mockedData
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
					<div className={styles.leftSide}>
						<h1 className={styles.title}>{housing?.title}</h1>
						<p className={styles.location}>{housing?.location}</p>
						<TagList tags={housing?.tags} />
					</div>
					<div className={styles.rightSide}>
						<div className={styles.ownerInfo}>
							<p className={styles.ownerName}>
								{housing?.host.name.split(" ").join("\n")}
							</p>
							<img
								src={housing?.host.picture}
								alt={housing?.host.name}
								className={styles.ownerImg}
							/>
						</div>
						<Rating rating={Number(housing?.rating)} />
					</div>
				</div>
				<div className={styles.secondaryInfo}>
					{/* Accordion components go here */}
				</div>
			</div>
		</main>
	);
};

export default HousingDetails;
