import React from "react";
import { motion } from "framer-motion";

const MusicHero = ({ icon }) => {
	return (
		<div className="music-link-container">
			<motion.a
				initial={{ scale: 1 }}
				whileHover={{ scale: 1.25 }}
				href="https://open.spotify.com/artist/3W9mqyUptTa6FdiwM9SH11">
				<img className="music-link-icon" src={icon} alt="logo" />
			</motion.a>
			<motion.a
				initial={{ scale: 1 }}
				whileHover={{ scale: 1.25 }}
				href="https://open.spotify.com/artist/3W9mqyUptTa6FdiwM9SH11">
				<img className="music-link-icon" src={icon} alt="logo" />
			</motion.a>
			<motion.a
				initial={{ scale: 1 }}
				whileHover={{ scale: 1.25 }}
				href="https://open.spotify.com/artist/3W9mqyUptTa6FdiwM9SH11">
				<img className="music-link-icon" src={icon} alt="logo" />
			</motion.a>
		</div>
	);
};

export default MusicHero;
