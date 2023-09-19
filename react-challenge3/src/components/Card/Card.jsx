import styles from "./Card.module.scss";
import { useState } from "react";

export const Card = () => {
	const [time, setTime] = useState(0);
	const [icon, setIcon] = useState("sun2.svg");
	const [darkMode, setDarkMode] = useState(false);

	const getRandomTime = () => {
		const randomTime = Math.floor(Math.random() * 24);
		setTime(randomTime);
		if (randomTime >= 6 && randomTime <= 17) {
			setIcon("sun2.svg");
			setDarkMode(false);
		} else {
			setIcon("moon2.svg");
			setDarkMode(true);
		}
	};

	let cardClasses = `${styles.card} ${styles.lightMode}`;
	if (darkMode) {
		cardClasses = `${styles.card} ${styles.darkMode}`;
	}

	return (
		<div className={cardClasses}>
			<h1>Random Time Generator</h1>
			<img src={icon}></img>
			<h2>{time}</h2>
			<button onClick={getRandomTime}>Get Random Time</button>
		</div>
	);
};
