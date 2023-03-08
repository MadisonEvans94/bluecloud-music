import React from "react";
import "../Clouds/Clouds.css";
import { motion } from "framer-motion";

const CloudFooter = () => {
	return (
		<>
			<motion.div
				className="cloud1"
				initial={{ y: 0 }}
				exit={{ y: 1000 }}
				transition={{ duration: 0.8 }}
			/>
			<motion.div
				initial={{ y: 0 }}
				exit={{ y: 1000 }}
				transition={{ duration: 1 }}
				className="cloud2"
			/>
			<motion.div
				initial={{ y: 0 }}
				exit={{ y: 1000 }}
				transition={{ duration: 1.2 }}
				className="cloud3"
			/>
			<motion.div
				initial={{ y: 0 }}
				exit={{ y: 1000 }}
				transition={{ duration: 1.8 }}
				className="cloud4"
			/>
		</>
	);
};

export default CloudFooter;
