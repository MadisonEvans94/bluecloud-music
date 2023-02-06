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
				{/* name input section*/}
				<div>
					<input
						placeholder="Name"
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						required
						className="name-input"
					/>
				</div>
				<hr className="divider" />
				{/* email input section */}
				<div>
					<input
						placeholder="Email"
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						required
						className="email-input"
					/>
				</div>
				<hr className="divider" />
				{/* feedback section */}
				<input className="feedback-section" type="text-area" rows={5} />
				<button className="submit-button" type="submit">
					Submit
				</button>
			</div>
			<div className="contact-info">
				<h2>For All Other Inquiries: </h2>
				<p>bluecloudbeats@gmail.com</p>
			</div>
		</div>
	);
};

export default ContactForm;
