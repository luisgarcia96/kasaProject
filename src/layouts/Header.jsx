import styles from "../styles/layouts/Header.module.scss";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className={styles.header}>
			<div>{/* Your header content */}</div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About us</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
