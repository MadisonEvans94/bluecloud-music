import React, { useState } from "react";

/**
 * ContactForm component that renders a form with a text input field for name,
 * an email input for email, a radio button input for message type, and a text
 * area for the message content.
 *
 * @returns {JSX.Element} The rendered form element.
 */
const ContactForm = () => {
	/**
	 * State to store the form data.
	 */
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		messageType: "",
		message: "",
	});

	/**
	 * Handles the input change event by updating the form data in state.
	 *
	 * @param {React.ChangeEvent<HTMLInputElement>} event The input change event.
	 */
	const handleInputChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	/**
	 * Handles the form submit event.
	 *
	 * @param {React.FormEvent<HTMLFormElement>} event The form submit event.
	 */
	const handleSubmit = (event) => {
		// Prevent the default form submit behavior
		event.preventDefault();
		// Log the form data to the console for demonstration purposes
		console.log("Form Data:", formData);
		// Perform some action with the form data, such as sending an API request
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleInputChange}
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
				/>
			</div>
			<div>
				<label>
					Message Type:
					<input
						type="radio"
						name="messageType"
						value="feedback"
						checked={formData.messageType === "feedback"}
						onChange={handleInputChange}
					/>
					Feedback
				</label>
				<label>
					<input
						type="radio"
						name="messageType"
						value="suggestion"
						checked={formData.messageType === "suggestion"}
						onChange={handleInputChange}
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
				/>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

export default ContactForm;
