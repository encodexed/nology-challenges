/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./ControlledForm.module.scss";

const ControlledForm = ({ handleInput }) => {
	const [formInput, setFormInput] = useState({
		firstName: "",
		lastName: "",
		jobTitle: "",
		email: "",
		phone: "",
		businessName: "",
		businessAddress: "",
	});

	const inputHandler = (e) => {
		setFormInput({ ...formInput, [e.target.name]: e.target.value });
		handleInput({ ...formInput, [e.target.name]: e.target.value });
	};

	return (
		<div className={styles.form_wrapper}>
			<form>
				<div>
					<label htmlFor='firstName'>First Name: </label>
					<input
						type='text'
						id='firstName'
						value={formInput.firstName}
						name='firstName'
						onChange={inputHandler}
					/>
				</div>
				<div>
					<label htmlFor='lastName'>Last Name: </label>
					<input
						type='text'
						id='lastName'
						value={formInput.lastName}
						name='lastName'
						onChange={inputHandler}
					/>
				</div>
				<div>
					<label htmlFor='jobTitle'>Job Title: </label>
					<input
						type='text'
						id='jobTitle'
						value={formInput.jobTitle}
						name='jobTitle'
						onChange={inputHandler}
					/>
				</div>
				<div>
					<label htmlFor='email'>Email: </label>
					<input
						type='email'
						id='email'
						value={formInput.email}
						name='email'
						onChange={inputHandler}
					/>
				</div>
				<div>
					<label htmlFor='phone'>Phone: </label>
					<input
						type='text'
						id='phone'
						value={formInput.phone}
						name='phone'
						onChange={inputHandler}
					/>
				</div>
				<div>
					<label htmlFor='businessName'>Business Name: </label>
					<input
						type='text'
						id='businessName'
						value={formInput.businessName}
						name='businessName'
						onChange={inputHandler}
					/>
				</div>
				<div>
					<label htmlFor='businessAddress'>Business Address: </label>
					<input
						type='text'
						id='businessAddress'
						value={formInput.businessAddress}
						name='businessAddress'
						onChange={inputHandler}
					/>
				</div>
			</form>
		</div>
	);
};

export default ControlledForm;
