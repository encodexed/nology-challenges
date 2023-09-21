import { useState } from "react";
import Card from "../Card/Card";

const getStarWarsPerson = async (id) => {
	const response = await fetch(`https://swapi.dev/api/people/${id}`);
	if (!response.ok) throw new Error("Failed to fetch id");

	const data = await response.json();
	return data;
};

const SearchForm = () => {
	const [personInfo, setPersonInfo] = useState({});
	const [searchInput, setSearchInput] = useState("");
	const [error, setError] = useState(null);
	const [isSearching, setIsSearching] = useState(false);

	// Controlled field: typing in the input field will update the state of the input field
	const updateInput = (e) => {
		setSearchInput(e.target.value);
	};

	const endSearch = () => {
		setIsSearching(false);
	};

	// A fetch request when the search button is clicked, returning, and updating with, information about the SW character
	const searchPerson = () => {
		setIsSearching(true);
		setPersonInfo({});
		try {
			getStarWarsPerson(searchInput).then((data) => {
				const {
					name,
					height,
					birth_year: birthYear,
					eye_color: eyeColor,
				} = data;
				setPersonInfo({
					name,
					height,
					birthYear,
					eyeColor,
				});
			});
			setError(null);
		} catch (e) {
			setError(e);
		}
	};

	return (
		<>
			<label htmlFor='personID'>Enter ID: </label>
			<input
				type='text'
				id='personID'
				name='personID'
				value={searchInput}
				onChange={updateInput}
			/>
			<button onClick={searchPerson}>Search</button>
			<Card
				info={personInfo}
				error={error}
				isSearching={isSearching}
				endSearch={endSearch}
			/>
		</>
	);
};

export default SearchForm;
