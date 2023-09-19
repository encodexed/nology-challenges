import { planets } from "../../../data/planets";
import Card from "../Card/Card";

planets.sort((a, b) => {
	if (a.diameterInKm > b.diameterInKm) {
		return -1;
	} else if (a.diameterInKm < b.diameterInKm) {
		return 1;
	} else {
		return 0;
	}
});

const CardsContainer = () => {
	return (
		<div className='card-container'>
			{planets.map((planet, index) => {
				const {
					planetName,
					image,
					distanceFromSun,
					diameterInKm,
					numberOfMoons,
					lengthOfYear,
				} = planet;
				return (
					<Card
						key={`planet-${index}`}
						planetName={planetName}
						image={image}
						distanceFromSun={distanceFromSun}
						diameterInKm={diameterInKm}
						numberOfMoons={numberOfMoons}
						lengthOfYear={lengthOfYear}
					/>
				);
			})}
		</div>
	);
};

export default CardsContainer;
