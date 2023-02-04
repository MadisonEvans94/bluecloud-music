import React, { useState } from "react";
import styled from "styled-components";
//TODO: create a form component that is organized as grid. 2/3 is input and 1/3 is contact details, location, and social links
const FormContainer = styled.form`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: min(40rem, 100%);
	background-color: pink;
	padding: 1rem;
`;
const FormInput = styled.form`
	grid-rea: 1 / 1 / 2 / 3;
	width: 100%;
	background-color: yellow;
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
				<div>
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
				<div>
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
				<div>
					<label>Message Type</label>

					<label>
						<input
							type="radio"
							name="messageType"
							value="suggestion"
							checked={formData.messageType === "suggestion"}
							onChange={handleInputChange}
							required
						/>
						Suggestion
					</label>
					<label>
						<input
							type="radio"
							name="messageType"
							value="question"
							checked={formData.messageType === "question"}
							onChange={handleInputChange}
							required
						/>
						Question
					</label>
				</div>
				<div>
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
				<h2 style={{ backgroundColor: "white" }}>contact details</h2>
				<h2>contact details</h2>
				<h2>contact details</h2>
			</ContactInfo>
		</FormContainer>
	);
};

export default ContactForm;
