import React, { useState } from "react";

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
		<div className="form-container" onSubmit={handleSubmit}>
			<div className="form-subsection">
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
				<input className="feedback-section" type="text-area" rows={5} />
				<button type="submit">Submit</button>
			</div>
			<div className="contact-info">
				<h2>For All Other Inquiries: </h2>
				<p>bluecloudbeats@gmail.com</p>
			</div>
		</div>
	);
};

export default ContactForm;
