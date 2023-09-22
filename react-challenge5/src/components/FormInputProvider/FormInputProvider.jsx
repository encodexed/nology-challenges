/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const InputContext = createContext(null);

const FormInputProvider = ({ children }) => {
	const [cardInfo, setCardInfo] = useState({});

	const handleInput = (updatedCardInfo) => {
		setCardInfo(updatedCardInfo);
	};

	return (
		<InputContext.Provider value={{ cardInfo, handleInput }}>
			{children}
		</InputContext.Provider>
	);
};

export default FormInputProvider;
