import React from "react";
import "../Clouds/Clouds.css";
import { motion } from "framer-motion";

const CloudFooter = ({ isClicked }) => {
	const variants = {
		visible: { y: 0 },
		hidden: { y: 100 },
	};

	return (
		<>
			<motion.div
				className="cloud1"
				animate={isClicked ? "hidden" : "visible"}
				variants={variants}
			/>
			<motion.div
				className="cloud2"
				animate={isClicked ? "hidden" : "visible"}
				variants={variants}
			/>
			<motion.div
				className="cloud3"
				animate={isClicked ? "hidden" : "visible"}
				variants={variants}
			/>
			<motion.div
				className="cloud4"
				animate={isClicked ? "hidden" : "visible"}
				variants={variants}
			/>
		</>
	);
};

export default CloudFooter;
