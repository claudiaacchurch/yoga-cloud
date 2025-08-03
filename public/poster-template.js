export default function YogaPoster({
	title,
	date,
	time,
	location,
	description,
	whatsapp,
	cost,
	note,
	image,
}) {
	return (
		<div
			style={{
				maxWidth: "900px",
				display: "flex",
				flexDirection: "row",
				background: "#B4C4B3",
				borderRadius: "16px",
				overflow: "hidden",
				boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
				fontFamily: `'Inter', sans-serif`,
				fontSize: "12px",
			}}
		>
			<div
				style={{
					flex: 1,
					padding: "1rem",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<h2
					style={{
						fontFamily: `'Cormorant Garamond', sans-serif`,
						textAlign: "center",
						fontSize: "1.5rem",
						marginBottom: "1.5rem",
						color: "#2E2E2E",
					}}
				>
					{title}
				</h2>

				<p>
					<strong>
						{date}, {time}
					</strong>
				</p>
				<div
					style={{
						margin: "0.5rem 0",
						textAlign: "center",
						fontSize: "1.5rem",
					}}
				>
					✧
				</div>
				<p>
					<strong>{location}</strong>
				</p>
				<div
					style={{
						margin: "0.5rem 0",
						textAlign: "center",
						fontSize: "1.5rem",
					}}
				>
					✧
				</div>
				<p
					style={{
						paddingBottom: "1rem",
						lineHeight: "1.5",
						textAlign: "center",
					}}
				>
					{description}
				</p>
				<p
					style={{
						paddingBottom: "1rem",
					}}
				>
					<strong>WhatsApp:</strong>{" "}
					<a
						style={{
							textDecoration: "underline",
							cursor: "pointer",
						}}
						href="#"
					>
						{whatsapp}
					</a>{" "}
				</p>
				<p
					style={{
						paddingBottom: "1rem",
					}}
				>
					<strong>Cost {cost}:</strong>{" "}
					<a
						style={{
							textDecoration: "underline",
							cursor: "pointer",
						}}
						href="#"
					>
						PayPal
					</a>{" "}
					or cash
				</p>
				<p>
					<strong>{note}</strong>
				</p>
			</div>
			<div
				style={{
					flex: 1,
					backgroundImage: `url(${image})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center center",
					backgroundSize: "cover",
					borderRadius: "0 16px 16px 0",
				}}
			/>
		</div>
	);
}
