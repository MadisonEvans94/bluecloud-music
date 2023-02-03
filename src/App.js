import "./App.css";

function App() {
	return (
		<>
			{/* Message form  */}
			<div className="form-container">
				<h2>Contact Form</h2>
				<form>
					{/* name */}
					<label htmlFor="name-input">Name</label>
					<input type="text" required id="name-input" />
					{/* email */}
					<label htmlFor="email-input">Email</label>
					<input type="text" required id="email-input" />
					{/* message type (radio buttons) */}
					<label htmlFor="message-type">Reason for Contact</label>
					<input type="text" required id="message-type" />
					{/* text area */}
					<label htmlFor="text-area">Message</label>
					<textarea name="" id="text-area" cols="30" rows="10"></textarea>
				</form>
			</div>
		</>
	);
}

export default App;
