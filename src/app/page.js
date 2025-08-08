"use client";
import Image from "next/image";
import styles from "./page.module.css";
import ClassCard from "../../public/poster-template";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable react/no-unescaped-entities */

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div className={styles.headerTop}>
					<div className={styles.navContainer}>
						<nav className={styles.desktopMenu}>
							<a href="#classes">Class Schedule</a>
							<a href="#contact">Contact</a>
							<div>
								<FontAwesomeIcon icon={faFacebook} />
							</div>
						</nav>
					</div>
				</div>
				<div className={styles.hero}>
					<div className={styles.aboutTextDiv}>
						<h1>Claudia Church Yoga</h1>
						<p>
							<i>Yoga for Space, Strength & Stillness</i>
						</p>
						<div className={styles.heroCTA}>
							<button
								onClick={() => {
									document
										.getElementById("upcomingClasses")
										?.scrollIntoView({ behavior: "smooth" });
								}}
							>
								Upcoming Classes
							</button>
							<button>Get in Touch</button>
						</div>
						<div className={styles.textDivider}>✦</div>
						<p>
							My classes are focused on the concept of space - in the body, the
							mind, and the world around us. I focus on slow, strong movement to
							release tension and build resilience, particularly in areas where
							stress often accumulates like the neck and hips.
						</p>

						<p>
							Yoga has been a tool for me to feel more present and lighter, both
							physically and mentally. My teaching is shaped by that experience,
							offering students a space to connect with themselves in a
							supportive way. I'm inspired by nature, and whenever possible, I
							practice outdoors. I find stillness in the natural rhythms of the
							environment, and aim to bring that sense of ease into class.
						</p>
					</div>
					<div className={styles.imageDiv}>
						<img src="/main.png"></img>
					</div>
				</div>

				<div className={styles.upcomingDiv} id="upcomingClasses">
					<h1>Upcoming Classes</h1>
					<p>Class schedule in Somerset: </p>
					<div className={styles.upcomingClasses}>
						<div>
							<ClassCard
								title="Gentle Midweek Reset"
								date="Wednesday 28th August, 6:30–7:30pm"
								location="St Audries Village Hall, West Quantoxhead, TA4 4DP"
								description="Unwind midweek with a grounding yoga flow and leave feeling lighter"
								whatsapp="+44 7984641632"
								paypalLink="https://paypal.me/claudiayoga"
								cost="£5"
								note=" * Please bring a yoga mat (optional strap & block)"
								imageSrc="/2709.jpg"
								imageAlt="Gentle Yoga"
							/>
						</div>
					</div>
				</div>

				
			</main>
			<footer className={styles.footer}>
				<a
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/file.svg"
						alt="File icon"
						width={16}
						height={16}
					/>
					Learn
				</a>
				<a
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/window.svg"
						alt="Window icon"
						width={16}
						height={16}
					/>
					Examples
				</a>
				<a
					href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/globe.svg"
						alt="Globe icon"
						width={16}
						height={16}
					/>
					Go to nextjs.org →
				</a>
			</footer>
		</div>
	);
}
