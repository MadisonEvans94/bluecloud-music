import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ResponsiveNav = () => {
	return (
		<div className="sm:absolute sm:right-0 sm:h-full flex flex-row sm:flex-col justify-center items-center px-5 z-50">
			<ul className="text-info text-xs z-50 flex flex-row sm:flex-col justify-around w-full items-center mx-4">
				<motion.li initial={{}} whileHover={{}} className="my-5">
					<Link to="/home">.</Link>
				</motion.li>
				<motion.li initial={{}} whileHover={{}} className="my-5">
					<Link to="/home">.</Link>
				</motion.li>
				<motion.li initial={{}} whileHover={{}} className="my-5">
					<Link to="/home">.</Link>
				</motion.li>
				<motion.li initial={{}} whileHover={{}} className="my-5">
					<Link to="/home">.</Link>
				</motion.li>
			</ul>
		</div>
	);
};

export default ResponsiveNav;
