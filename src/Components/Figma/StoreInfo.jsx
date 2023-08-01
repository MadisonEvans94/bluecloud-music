import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Header";
import Paragraph from "./Paragraph";

const StoreInfo = () => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="h-full flex"
			>
				<div className="my-auto px-5">
					<Header>Store</Header>
					<Paragraph>Sample Packs, Plugins, and much more</Paragraph>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default StoreInfo;
