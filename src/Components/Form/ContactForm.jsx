import React, { useState } from "react";
import styled from "styled-components";
const FormContainer = styled.form`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: min(40rem, 100%);

	padding: 1rem;
`;
const FormSubSection = styled.form`
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
			<FormSubSection>
				{/* //TODO name input  */}
				<div style={{ display: "flex", flexDirection: "column" }}>
					<input
						placeholder="Name"
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						required
						style={{
							backgroundColor: "transparent",
							border: "none",
							height: "2rem",
						}}
					/>
				</div>
				<hr
					style={{
						color: "white",
						border: "none",
						backgroundColor: "white",
						width: "100%",
						height: "1px",
						marginBottom: "10px",
					}}
				/>
				{/* //TODO email input */}
				<div style={{ display: "flex", flexDirection: "column" }}>
					<input
						placeholder="Email"
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						required
						style={{
							backgroundColor: "transparent",
							border: "none",
							height: "2rem",
						}}
					/>
				</div>
				<hr
					style={{
						color: "white",
						border: "none",
						backgroundColor: "white",
						width: "100%",
						height: "1px",
						marginBottom: "1rem",
					}}
				/>
				{/* //TODO Message Content  */}
				<div style={{ display: "flex", flexDirection: "column" }}>
					<textarea
						placeholder="Message"
						id="message"
						name="message"
						value={formData.message}
						onChange={handleInputChange}
						required
						style={{
							marginBottom: "1rem",
							minHeight: "10rem",
						}}
					/>
				</div>
				<button type="submit">Submit</button>
			</FormSubSection>
			<ContactInfo>
				<h2>Contact Details</h2>
				<p>bluecloudbeats@gmail.com</p>
				<h2>Location</h2>
				<p>Phoenix, Arizona</p>
				<h2>Social</h2>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<a href="http://instagram.com">Instagram</a>
					<a href="http://spotify.com">Spotify</a>
				</div>
			</ContactInfo>
		</FormContainer>
	);
};

export default ContactForm;
