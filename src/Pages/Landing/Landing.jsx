import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Clouds from "../../Components/Clouds/Clouds";
import "./Landing.css";
import { motion } from "framer-motion";

const Landing = () => {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<>
			<div className="landing-page">
				<Link to="/home/music">
					<motion.h1
						className="landing-title"
						onClick={() => setIsClicked((prev) => !prev)}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 1.2 } }}
						whileHover={{ scale: 1.05, transition: { duration: 1.2 } }}
						exit={{
							opacity: 0,
							y: -140,
							transition: { type: "linear", duration: 1.2 },
						}}>
						blue cloud
					</motion.h1>
				</Link>

				<Clouds isClicked={isClicked} />
			</div>
		</>
	);
};

export default Landing;
