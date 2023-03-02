import React, { useState } from "react";
import { motion } from "framer-motion";
const endpoint = "http://localhost:8000";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		full_name: "",
		email: "",
	});
	const [successMessage, setSuccessMessage] = useState("");

	const handleInputChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const resetFormData = () => {
		setFormData((prevState) => ({
			...prevState,
			full_name: "",
			email: "",
		}));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch(endpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			resetFormData();
			console.log(formData);
			console.log(response);
			//[ ] add a visual queue for comfirming successfull post
			//[x] clear the form after submission
		} catch (error) {
			setSuccessMessage("Form Failed");
			console.log(successMessage);
		}
	};

	return (
		//[ ] clean up the positioning of the stylign
		<motion.div
			className="form-container"
			initial={{ y: 200, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ type: "spring", damper: 10 }}>
			<form onSubmit={handleSubmit}>
				<div className="form-subsection">
					<div>
						<input
							placeholder="Name"
							type="text"
							id="name"
							name="full_name"
							value={formData.full_name}
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
					<button className="submit-button" type="submit">
						Submit
					</button>
				</div>
			</form>
			<div className="contact-info">
				<h2>For All Other Inquiries: </h2>
				<p>bluecloudbeats@gmail.com</p>
			</div>
		</motion.div>
	);
};

export default ContactForm;
