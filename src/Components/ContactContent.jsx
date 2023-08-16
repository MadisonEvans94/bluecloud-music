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
			<Paragraph>
				stay up to date with new releases, store items, blogs, and more
				by subscribing to the news letter
			</Paragraph>
			<p className="text-xs text-secondary mb-8">
				Note: No personal data is being collected by opting into email
				alerts. Feel free to unsubscribe at any time!
			</p>
			<ContactForm />
		</div>
	);
});

export default ContactContent;

function ContactForm() {
	return (
		<div>
			<div className="flex flex-row justify-start items-end mt-2 mb-8">
				<Paragraph className="w-1/6">Your Email:</Paragraph>
				<input
					className="w-1/2 border-none rounded-md ml-4 p-2 text-primary"
					type="email"
				/>
			</div>

			<div className="w-full flex">
				<button className="border py-3 px-4 mx-auto rounded-lg my-2 w-fit text-info text-paragraphMobile md:text-paragraphTablet lg:text-paragraphDesktop hover:bg-info hover:text-primary transition">
					subscribe
				</button>
			</div>
		</div>
	);
}
