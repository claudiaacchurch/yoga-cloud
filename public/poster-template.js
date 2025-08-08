import React from "react";
import styles from "../src/app/page.module.css";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClassCard = ({
	title = "1-Hour Beginner-Friendly Hatha Yoga Class",
	date = "Sunday 27th July, 6–7pm",
	location = "West Quantoxhead, TA4 4DP",
	description = "Gentle body openers to gradually release tension and slow the mind. Includes some slower-paced dynamic flows.",
	whatsapp = "+44 7984 641632",
	paypalLink = "#",
	cost = "£5",
	note = "Please bring your own yoga mat (optional block & strap)",
	imageSrc = "/path-to-your-image.jpg",
	imageAlt = "Yoga class image",
}) => {
	return (
		<div className={styles.classCard}>
			<div className={styles.classImg}>
				<img src={imageSrc} alt={imageAlt} />
			</div>
			<div className={styles.classInfo}>
				<h3>
					<strong>{title}</strong>
				</h3>
				<p className={styles.classDate}>
					<div>
						<FontAwesomeIcon icon={faCalendar} />
					</div>{" "}
					{date}
				</p>
				<p className={styles.classLocation}>📍 {location}</p>
				<p className={styles.classDescription}>{description}</p>
				<p>
					<strong>Cost: {cost}</strong> (
					<a href={paypalLink} target="_blank" rel="noopener noreferrer">
						PayPal
					</a>{" "}
					or cash)
				</p>
				<p className={styles.classNote}>{note}</p>
				<button>Book Now</button>
			</div>
		</div>
	);
};

export default ClassCard;
