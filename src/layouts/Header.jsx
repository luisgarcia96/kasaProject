import styles from "../styles/layouts/Header.module.scss";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logos/logo-normal.svg";

const Header = () => {
	const location = useLocation();

	return (
		<header className={styles.header}>
			<div className={styles.logoContainer}>
				<Link to="/">
					<img src={logo} alt="logo" className={styles.logo} />
				</Link>
			</div>
			<nav className={styles.navContainer}>
				<ul className={styles.navLinkList}>
					<li className={styles.navLink}>
						<Link
							to="/"
							className={location.pathname === "/" ? styles.activeLink : ""}
						>
							Accueil
						</Link>
					</li>
					<li className={styles.navLink}>
						<Link
							to="/about"
							className={
								location.pathname === "/about" ? styles.activeLink : ""
							}
						>
							A Propos
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
