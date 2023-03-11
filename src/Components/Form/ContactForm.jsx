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
			setSuccessMessage("submission successful");
		} catch (error) {
			setSuccessMessage("server down: currently under development");
			console.log(successMessage);
		}
	};

	return (
		<div className="contact-content">
			<motion.h1
				initial={{ y: 300, opacity: 0 }}
				animate={{
					y: 0,
					opacity: 1,
					transition: { type: "spring", stiffness: 40, damping: 10 },
				}}
				exit={{
					y: 300,
					opacity: 0,
					transition: { type: "tween", ease: "easeInOut", duration: 0.8 },
				}}
				style={{ marginBottom: "2rem", marginInline: "auto" }}>
				Get Added to the Email List
			</motion.h1>
			<motion.div
				className="form-container"
				initial={{ y: 300, opacity: 0 }}
				animate={{
					y: 0,
					opacity: 1,
					transition: { type: "spring", stiffness: 40, damping: 10 },
				}}
				exit={{
					y: 300,
					opacity: 0,
					transition: { type: "tween", ease: "easeInOut", duration: 0.8 },
				}}>
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
						<p className="submission-success">{successMessage}</p>
					</div>
				</form>
				<div className="contact-info">
					<h2>For All Other Inquiries: </h2>
					<p>bluecloudbeats@gmail.com</p>
				</div>
			</motion.div>
		</div>
	);
};

export default ContactForm;
