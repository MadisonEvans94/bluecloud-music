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
			<motion.div className="cloud1" />
			<motion.div className="cloud2" />
			<motion.div className="cloud3" />
			<motion.div className="cloud4" />
		</>
	);
};

export default CloudFooter;
