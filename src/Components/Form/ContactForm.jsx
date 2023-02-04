import React, { useState } from "react";
import styled from "styled-components";
const FormContainer = styled.form`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: min(40rem, 100%);

	padding: 1rem;
`;
const FormInput = styled.form`
	grid-rea: 1 / 1 / 2 / 3;
	width: 100%;
`;
const ContactInfo = styled.form`
	grid-rea: 1 / 3 / 2 / 4;
	min-width: 16rem;
`;
const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		messageType: "",
		message: "",
	});

	const handleInputChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const resetFormData = () => {
		setFormData({
			name: "",
			email: "",
			messageType: "",
			message: "",
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("Form Data:", formData);
		resetFormData();
	};

	return (
		<FormContainer onSubmit={handleSubmit}>
			<FormInput>
				{/* //TODO name input  */}
				<div style={{ display: "flex", flexDirection: "column" }}>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						required
					/>
				</div>
				{/* //TODO email input */}
				<div style={{ display: "flex", flexDirection: "column" }}>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						required
					/>
				</div>
				{/* //TODO Message Content  */}
				<div style={{ display: "flex", flexDirection: "column" }}>
					<label htmlFor="message">Message:</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleInputChange}
						required
					/>
				</div>
				<button type="submit">Submit</button>
			</FormInput>
			<ContactInfo>
				<h2>contact details</h2>
				<h2>contact details</h2>
			</ContactInfo>
		</FormContainer>
	);
};

export default ContactForm;
