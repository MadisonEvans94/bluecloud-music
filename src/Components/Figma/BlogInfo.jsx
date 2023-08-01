import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import { AnimatePresence, motion } from "framer-motion";

const BlogInfo = () => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="h-full flex"
			>
				<div className="my-auto px-5">
					<Header>Blogs</Header>
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

export default BlogInfo;
