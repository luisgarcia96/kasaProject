import React from "react";

import Accordion from "../components/Accordion";
import { aboutSections } from "../mocks/aboutPageMock";

import styles from "../styles/pages/About.module.scss";

const About = () => {
	return (
		<main className={styles.about}>
			<div className={styles.titleContainer}></div>
			<div className={styles.infoContainer}>
				{aboutSections.map((section, index) => (
					<Accordion
						key={`section-${section.title}-${index}`}
						title={section.title}
						text={section.content}
					/>
				))}
			</div>
		</main>
	);
};

export default About;
