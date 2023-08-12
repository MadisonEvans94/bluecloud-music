import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./utility/Header";
import Paragraph from "./utility/Paragraph";
const ContactInfo = () => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="h-full flex"
			>
				<div className="my-auto px-5">
					<Header>Get In Touch</Header>
					<Paragraph>
						Explore 'My Music', the creative corner of an
						independent alternative electronic music producer.
						Discover enchanting soundscapes
					</Paragraph>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default ContactInfo;
