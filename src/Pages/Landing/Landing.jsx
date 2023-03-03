import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Clouds from "../../Components/Clouds/Clouds";
import "./Landing.css";
import { motion } from "framer-motion";
const pageVariants = {
	initial: {
		opacity: 0,
		scale: 0.8,
		color: "white",
	},
	animate: {
		opacity: 1,
		scale: 1.05,
		transition: {
			type: "spring",
			damper: 20,
			duration: 1,
		},
	},
	exit: {
		opacity: 0,
		x: "-100",
		transition: {
			duration: 1,
		},
	},
	transition: { type: "spring", stiffness: 100 },
	hover: {
		scale: 1.1,

		transition: {
			duration: 1,
		},
	},
};

const Landing = () => {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<>
			<div className="landing-page">
				<Link to="/home/music">
					<motion.h1
						className="landing-title"
						onClick={() => setIsClicked((prev) => !prev)}
						variants={pageVariants}
						initial="initial"
						animate="animate"
						exit="exit"
						whileHover="hover"
						transition="transition">
						blue cloud
					</motion.h1>
				</Link>

				<Clouds isClicked={isClicked} />
			</div>
		</>
	);
};

export default Landing;
