import { useState, useEffect } from "react";

/* eslint-disable react/prop-types */
const Card = ({ info, error, isSearching, endSearch }) => {
	const [personInfo, setPersonInfo] = useState({});
	const dataReady = Object.keys(info).length ? true : false;

	console.log({ dataReady });
	console.log({ isSearching });

	useEffect(() => {
		if (dataReady) {
			setPersonInfo({ ...info });
			endSearch();
		}
	}, [info, dataReady, endSearch]);

	const { name, height, birthYear, eyeColor } = personInfo;

	return (
		<>
			{error && <p style={{ color: "red" }}>{error.message}</p>}
			{!dataReady && isSearching && <p>Loading...</p>}
			{dataReady && (
				<div>
					<h2>{name}</h2>
					<ul>
						<li>Height: {height}</li>
						<li>Birth Year: {birthYear} </li>
						<li>Eye colour: {eyeColor}</li>
					</ul>
				</div>
			)}
		</>
	);
};

export default Card;
