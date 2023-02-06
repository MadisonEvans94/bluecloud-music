import React from "react";
import Featured from "../../Components/Featured/Featured";
import MusicHero from "../../Components/MusicHero/MusicHero";
import spotifyIcon from "../../assets/svg/iOS/spotify-icon.svg";
import MyMusic from "../../Components/MyMusic/MyMusic";
import "./Music.css";
import featuredImg from "../../assets/images/badsnacks-reference-img.png";
import { motion } from "framer-motion";
const Music = () => {
	return (
		<>
			<div className="music-page-container">
				<MusicHero icon={spotifyIcon} />
				<Featured featuredImg={featuredImg} />
				<MyMusic />

				<motion.div
					className="div4"
					initial={{ y: 600, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "spring", stiffness: 40, damping: 10 }}>
					<h2 className="music-page-header">Other</h2>
					<div className="div4-container">some text</div>
				</motion.div>
			</div>
		</>
	);
};

export default Music;
