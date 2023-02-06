import React from "react";
import "../Clouds/Clouds.css";
import { motion } from "framer-motion";
const CloudFooter = () => {
	return (
		<>
			<motion.div
				initial={{ y: 0 }}
				animate={{ y: "100vh" }}
				transition={{
					delay: 0.5,
					y: { duration: 2 },
					default: { ease: "easeIn" },
				}}
				className="cloud1"></motion.div>
			<motion.div
				initial={{ y: 0 }}
				animate={{ y: "100vh" }}
				transition={{
					delay: 0.5,
					y: { duration: 2.4 },
					default: { ease: "easeIn" },
				}}
				className="cloud2"></motion.div>
			<motion.div
				initial={{ y: 0 }}
				animate={{ y: "100vh" }}
				transition={{
					delay: 0.5,
					y: { duration: 2.7 },
					default: { ease: "easeIn" },
				}}
				className="cloud3"></motion.div>
			<motion.div
				initial={{ y: 0 }}
				animate={{ y: "100vh" }}
				transition={{
					delay: 0.5,
					y: { duration: 3 },
					default: { ease: "easeIn" },
				}}
				className="cloud4"></motion.div>
		</>
	);
};

export default CloudFooter;
