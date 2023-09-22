import BusinessCard from "./components/BusinessCard/BusinessCard";
import ControlledForm from "./components/Form/ControlledForm";
import styles from "./App.module.scss";
import FormInputProvider from "./components/FormInputProvider/FormInputProvider";

const App = () => {
	return (
		<div className={styles.card_container}>
			<h1>Business Card Generator</h1>
			<FormInputProvider>
				<ControlledForm />
				<BusinessCard />
			</FormInputProvider>
		</div>
	);
};

export default App;
