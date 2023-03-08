import React from "react";
import { motion } from "framer-motion";
import { BsSpotify } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";

const MusicHero = () => {
	return (
		<div className="hero-section">
			<motion.div
				className="music-link-icon"
				initial={{ y: 50, opacity: 0 }}
				animate={{ opacity: 1, y: 0 }}
				whileHover={{ scale: 1.1 }}
				transition={{ type: "spring", damping: 8, stiffness: 50 }}>
				<div className="icon-container">
					<a href="https://open.spotify.com/artist/3W9mqyUptTa6FdiwM9SH11">
						<BsSpotify size="100%" style={{ cursor: "pointer" }} />
					</a>
				</div>
			</motion.div>
			<motion.div
				className="music-link-icon"
				initial={{ y: 50, opacity: 0 }}
				animate={{ opacity: 1, y: 0 }}
				whileHover={{ scale: 1.1 }}
				transition={{ type: "spring", damping: 8, stiffness: 50 }}>
				<div className="icon-container">
					<a href="https://music.apple.com/us/artist/blue-cloud/1510449426">
						<FaApple size="100%" style={{ cursor: "pointer" }} />
					</a>
				</div>
			</motion.div>
			<motion.div
				className="music-link-icon"
				initial={{ y: 50, opacity: 0 }}
				animate={{ opacity: 1, y: 0 }}
				whileHover={{ scale: 1.1 }}
				transition={{ type: "spring", damping: 8, stiffness: 50 }}>
				<div className="icon-container">
					<a href="https://soundcloud.com/bluecloudmusic">
						<FaSoundcloud size="100%" style={{ cursor: "pointer" }} />
					</a>
				</div>
			</motion.div>
		</div>
	);
};

export default MusicHero;
