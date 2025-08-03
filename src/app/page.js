"use client";
import Image from "next/image";
import styles from "./page.module.css";
import YogaPoster from "../../public/poster-template";

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div className={styles.hero}>
					<h1>Claudia Church Yoga</h1>
					<nav className={styles.nav}>
						<a>Classes in Somerset</a>
						<a>Private Classes</a>
						<a>Online Classes</a>
						<a>Contact</a>
					</nav>
				</div>
				<p className={styles.subheader}>Yoga for Space, Strength & Stillness</p>
				<div className={styles.about}>
					<div className={styles.imageDiv}>
						<img src="/main.jpg"></img>
					</div>
					<div className={styles.aboutTextDiv}>
						<h1>About Me:</h1>
						<p>
							I’m a 200hr certified Hatha Yoga teacher, and my classes are
							grounded in creating space - in the body, the mind, and the world
							around us. I focus on slow, strong movement to help release
							tension and build resilience, particularly in areas where stress
							often accumulates like the neck and hips. Yoga has been a tool for
							me to feel more present and lighter, both physically and mentally.
							My teaching is shaped by that experience, offering students a
							space to connect with themselves in a real and supportive way. I'm
							deeply inspired by nature, and whenever possible, I practice
							outdoors. I find stillness in the natural sounds and rhythms of
							the environment, and aim to bring that sense of ease into each
							class.{" "}
						</p>
					</div>
				</div>

				<div className={styles.upcomingDiv}>
					<h1>Upcoming Classes:</h1>
					<div className={styles.upcomingClasses}>
						<div>
							<YogaPoster
								title="1-Hour Beginner-Friendly Hatha Yoga Class"
								date="Sunday 27th July"
								time="6–7pm"
								location="West Quantoxhead, TA4 4DP"
								description="We will be focused on gentle body openers to gradually release tension and slow down the mind, mixing in some slower-paced dynamic flows."
								whatsapp="+44 7984 641632"
								cost="£5"
								note="Please bring your own yoga mat (optional block & strap)"
								image="/about.png"
							/>
						</div>
					</div>
				</div>

				<div className={styles.containerOfferings}>
					<div>Classes in Somerset</div>
					<div>Private Classes (online or in-person)</div>
					<div>Upcoming Events</div>
				</div>
				<div>
					<h1> Schedule: </h1>
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
