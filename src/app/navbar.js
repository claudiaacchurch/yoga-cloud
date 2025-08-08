"use client";
import { useState, useEffect } from "react";
import styles from "../app/page.module.css";

export default function Navbar() {
	const [isMobile, setIsMobile] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		handleResize(); // Run on mount
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className={styles.navContainer}>
			{isMobile ? (
				<>
					<button
						className={styles.hamburger}
						onClick={() => setMenuOpen((prev) => !prev)}
					>
						☰
					</button>
					{menuOpen && (
						<nav className={styles.mobileMenu}>
							<a href="#classes">Classes in Somerset</a>
							<a href="#private">Private Classes</a>
							<a href="#online">Online Classes</a>
							<a href="#contact">Contact</a>
						</nav>
					)}
				</>
			) : (
				<nav className={styles.desktopMenu}>
					<a href="#classes">Classes in Somerset</a>
					<a href="#private">Private Classes</a>
					<a href="#online">Online Classes</a>
					<a href="#contact">Contact</a>
				</nav>
			)}
		</div>
	);
}
