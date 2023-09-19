/* eslint-disable react/prop-types */
const Card = ({
	planetName,
	image,
	distanceFromSun,
	diameterInKm,
	numberOfMoons,
	lengthOfYear,
}) => {
	let cardClasses = "";
	if (numberOfMoons) {
		cardClasses = "card bg-black text-white";
	} else {
		cardClasses = "card bg-grey";
	}

	return (
		<div className={cardClasses}>
			<img src={image} alt={`A picture of ${planetName}`}></img>
			<div>
				<h2>{planetName}</h2>
				<ul>
					<li>Distance from Sun: {distanceFromSun}</li>
					<li>Diameter in km: {diameterInKm}</li>
					<li>Number of moons: {numberOfMoons}</li>
					<li>Length of year: {lengthOfYear}</li>
				</ul>
			</div>
		</div>
	);
};

export default Card;
