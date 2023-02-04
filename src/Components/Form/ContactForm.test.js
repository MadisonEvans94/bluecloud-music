import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

describe("ContactForm component", () => {
	it("renders form with correct inputs and submits data", () => {
		const { container, screen } = render(<ContactForm />);

		// Fill out form
		fireEvent.change(screen.getByLabelText("Name:"), {
			target: { value: "John Doe" },
		});
		fireEvent.change(screen.getByLabelText("Email:"), {
			target: { value: "john.doe@example.com" },
		});
		fireEvent.click(screen.getByLabelText("Suggestion"));
		fireEvent.change(screen.getByLabelText("Message:"), {
			target: { value: "This is a test message" },
		});

		// Submit form
		fireEvent.submit(screen.getByRole("form"));

		// Check if form data has been logged to the console
		const formData = global.console.mock.calls[0][0].split(":")[1].trim();
		expect(formData).toEqual(
			JSON.stringify(
				{
					name: "John Doe",
					email: "john.doe@example.com",
					messageType: "suggestion",
					message: "This is a test message",
				},
				undefined,
				2
			)
		);
	});
});
