import React from "react";
import Header from "./Utility/Header";
import Paragraph from "./Utility/Paragraph";
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
						Explore My Blogs, a place where you can see some of my
						music and technology insights
					</Paragraph>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default BlogInfo;
