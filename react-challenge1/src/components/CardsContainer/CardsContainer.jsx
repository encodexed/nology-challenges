import favouriteAlbums from "../../data/favouriteAlbums";
import { Card } from "../Card/Card";

export const CardsContainer = () => {
	return (
		<>
			{favouriteAlbums.map((album, index) => {
				const { title, band, rating } = album;
				return (
					<Card
						key={`album-${index}`}
						title={title}
						band={band}
						rating={rating}
					/>
				);
			})}
		</>
	);
};
