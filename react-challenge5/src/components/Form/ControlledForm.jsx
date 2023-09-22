/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import styles from "./ControlledForm.module.scss";
import { InputContext } from "../FormInputProvider/FormInputProvider";

const ControlledForm = () => {
	const [formInput, setFormInput] = useState({
		firstName: "",
		lastName: "",
		jobTitle: "",
		email: "",
		phone: "",
		businessName: "",
		businessAddress: "",
	});

	const { handleInput } = useContext(InputContext);

	const inputHandler = (e) => {
		const newFormObj = { ...formInput, [e.target.name]: e.target.value };
		setFormInput(newFormObj);
		handleInput(newFormObj);
	};

	const imageInputHandler = (e) => {
		const selectedImage = e.target.files[0];
		const newFormObj = {
			...formInput,
			imageUrl: URL.createObjectURL(selectedImage),
		};
		setFormInput(newFormObj);
		handleInput(newFormObj);
	};

	return (
		<div className={styles.form_wrapper}>
			<form>
				<div>
					<input type='file' onChange={imageInputHandler} />
				</div>
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
