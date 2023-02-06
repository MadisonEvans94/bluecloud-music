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
			<div
				style={{
					position: "absolute",
					left: "0",
					right: "0",
					top: "0",
					bottom: "0",
					backgroundColor: "#2ea8ff",
					zIndex: "-10",
				}}>
				<Link to="/home/music">
					<motion.h1
						className="landing-title"
						onClick={() => setIsClicked((prev) => !prev)}
						initial={{ x: 0, y: 0 }}
						whileHover={{ scale: 1.1 }}>
						blue cloud
					</motion.h1>
				</Link>

				<Clouds isClicked={isClicked} />
			</div>
		</>
	);
};

export default Landing;
