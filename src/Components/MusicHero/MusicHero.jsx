import React from "react";
import { motion } from "framer-motion";
import { BsSpotify } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";
const MusicHero = ({ icon }) => {
	return (
		<div className="music-link-container">
			<motion.div
				className="music-link-icon"
				initial={{ y: 50, opacity: 0 }}
				animate={{ opacity: 1, y: 0 }}
				whileHover={{ scale: 1.3 }}
				transition={{ type: "spring", damping: 8, stiffness: 50 }}>
				<a href="https://google.com">
					<BsSpotify size="100px" style={{ cursor: "pointer" }} />
				</a>
			</motion.div>
			<motion.div
				className="music-link-icon"
				initial={{ y: 50, opacity: 0 }}
				animate={{ opacity: 1, y: 0 }}
				whileHover={{ scale: 1.3 }}
				transition={{ type: "spring", damping: 8, stiffness: 50 }}>
				<a href="https://google.com">
					<FaApple size="100px" style={{ cursor: "pointer" }} />
				</a>
			</motion.div>
			<motion.div
				className="music-link-icon"
				initial={{ y: 50, opacity: 0 }}
				animate={{ opacity: 1, y: 0 }}
				whileHover={{ scale: 1.3 }}
				transition={{ type: "spring", damping: 8, stiffness: 50 }}>
				<a href="https://google.com">
					<FaSoundcloud size="100px" style={{ cursor: "pointer" }} />
				</a>
			</motion.div>
		</div>
	);
};

export default MusicHero;
