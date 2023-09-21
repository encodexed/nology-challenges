/* eslint-disable react/prop-types */
import styles from "./BusinessCard.module.scss";
import placeholder from "../../assets/placeholder.png";

const BusinessCard = ({ cardInfo }) => {
	const {
		firstName,
		lastName = "",
		jobTitle = "",
		email,
		phone,
		businessName,
		businessAddress,
	} = cardInfo;
	const lastNameCaps = lastName.toUpperCase();
	const jobTitleCaps = jobTitle.toUpperCase();

	return (
		<div className={styles.card}>
			<img className={styles.image} src={placeholder} alt='' />
			<div className={styles.text}>
				<h2 className={styles.text__first_name}>
					{firstName}{" "}
					<span className={styles.text__last_name}>{lastNameCaps}</span>
				</h2>
				<p>{jobTitleCaps}</p>
				<p>{businessName}</p>
				<div>
					<p>{email}</p>
					<p>{phone}</p>
				</div>
				{businessAddress && <p>{businessAddress}</p>}
			</div>
		</div>
	);
};

export default BusinessCard;
