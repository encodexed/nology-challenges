/* eslint-disable react/prop-types */
import styles from "./BusinessCard.module.scss";
import { useContext } from "react";
import { InputContext } from "../FormInputProvider/FormInputProvider";
import placeholder from "../../assets/placeholder.png";

const BusinessCard = () => {
	const { cardInfo } = useContext(InputContext);

	const {
		imageUrl,
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
			{!imageUrl && (
				<img
					className={styles.image}
					src={placeholder}
					alt='An image of something that was uploaded'
				/>
			)}
			{imageUrl && (
				<img
					className={styles.image}
					src={imageUrl}
					alt='An image of something that was uploaded'
				/>
			)}
			<div className={styles.text}>
				<div>
					<h2 className={styles.text__first_name}>
						{firstName}{" "}
						<span className={styles.text__last_name}>{lastNameCaps}</span>
					</h2>
					<p>{jobTitleCaps}</p>
				</div>
				<div>
					<p>{email}</p>
					<p>{phone}</p>
				</div>

				<div>
					<p className={styles.text__business_name}>{businessName}</p>
					{businessAddress && <p>{businessAddress}</p>}
				</div>
			</div>
		</div>
	);
};

export default BusinessCard;
