import React, { useState } from "react";
import { motion } from "framer-motion";
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
		<motion.div
			className="form-container"
			onSubmit={handleSubmit}
			initial={{ y: 200, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ type: "spring", stiffness: 40, damping: 10 }}>
			<div className="form-subsection">
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

				<input className="feedback-section" type="text-area" rows={5} />
				<button className="submit-button" type="submit">
					Submit
				</button>
			</div>
			<div className="contact-info">
				<h2>For All Other Inquiries: </h2>
				<p>bluecloudbeats@gmail.com</p>
			</div>
		</motion.div>
	);
};

export default ContactForm;
