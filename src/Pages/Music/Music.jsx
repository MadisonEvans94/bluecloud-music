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
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ type: "spring", stiffness: 40, damping: 10 }}>
					<h2 className="music-page-header alt-header">News</h2>
					<div className="div4-container">
						Hey everyone! You might have noticed that I've been a bit quiet on
						the music front lately, but that's because I've been hard at work
						behind the scenes. I've been taking some time away from creating to
						really hone my technical skills and perfect my craft. In addition to
						music production, I've been expanding my knowledge into different
						tech-related spaces like web design and programming virtual sound
						instruments. I've also been working on creating a line of
						downloadable products for music producers, including sample packs
						and plugins that I'm excited to release soon on my site. Thanks for
						your patience and support, and stay tuned for more updates!
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default Music;
