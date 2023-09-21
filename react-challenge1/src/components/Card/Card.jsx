export const Card = ({ title, band, rating }) => {
	return (
		<div>
			<h2>{title}</h2>
			<h3>{band}</h3>
			<h4>{rating}</h4>
		</div>
	);
};
