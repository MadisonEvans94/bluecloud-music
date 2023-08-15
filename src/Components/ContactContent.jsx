import React from "react";
import Paragraph from "./Utility/Paragraph";

// TODO
const ContactContent = React.forwardRef(({ className }, ref) => {
	return (
		<div
			ref={ref}
			id="contact"
			className={`pl-10 pr-24 flex flex-col justify-center my-auto relative h-screen bg-cover bg-center snap-center ${className}`}
		>
			<Paragraph className="mb-12">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
				praesentium hic provident ipsam architecto natus earum,
				molestias sed exercitationem ullam
			</Paragraph>
			<ContactForm />
		</div>
	);
});

export default ContactContent;

function ContactForm() {
	return (
		<div>
			<div className="flex flex-row justify-between my-2">
				<Paragraph>Name</Paragraph>
				<input
					className="w-4/5 border-none rounded-sm ml-4"
					type="text"
				/>
			</div>
			<div className="flex flex-row justify-between my-2">
				<Paragraph>Email</Paragraph>
				<input
					className="w-4/5 border-none rounded-sm ml-4"
					type="text"
				/>
			</div>
			<div className="flex flex-row justify-between my-2">
				<Paragraph>Category</Paragraph>
				<input
					className="w-4/5 border-none rounded-sm ml-4"
					type="text"
				/>
			</div>
			<div className="flex flex-col justify-between my-2">
				<Paragraph className="mb-2">Message</Paragraph>
				<textarea
					className="w-full border-none rounded-sm"
					rows="5"
				></textarea>
			</div>
			<div className="w-full flex">
				<button className="border p-4 mx-auto rounded-lg my-2 w-64 text-info text-paragraphMobile md:text-paragraphTablet lg:text-paragraphDesktop hover:bg-info hover:text-primary transition">
					send
				</button>
			</div>
		</div>
	);
}
