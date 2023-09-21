import BusinessCard from "./components/BusinessCard/BusinessCard";
import ControlledForm from "./components/Form/ControlledForm";
import styles from "./App.module.scss";
import { useState } from "react";

const App = () => {
	const [cardInfo, setCardInfo] = useState({});

	const handleInput = (updatedCardInfo) => {
		setCardInfo(updatedCardInfo);
	};

	return (
		<div className={styles.card_container}>
			<h1>Business Card Generator</h1>
			<ControlledForm handleInput={handleInput} />
			<BusinessCard cardInfo={cardInfo} />
		</div>
	);
};

export default App;
