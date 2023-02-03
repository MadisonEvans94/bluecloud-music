import "./App.css";

function App() {
	return (
		<>
			{/* Message form  */}
			<div className="form-container">
				<h2>Form</h2>
				<form>
					{/* name */}
					<label htmlFor="name-input">Name</label>
					<input type="text" required id="name-input" />
					{/* email */}
					<label htmlFor="email-input">Name</label>
					<input type="text" required id="email-input" />
					{/* message type (radio buttons) */}
					<label htmlFor="message-type">Name</label>
					<input type="text" required id="message-type" />
					{/* text area */}
					<label htmlFor="text-area">Name</label>
					<textarea name="" id="text-area" cols="30" rows="10"></textarea>
				</form>
			</div>
		</>
	);
}

export default App;
