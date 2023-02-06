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
					<div className="div4-container">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio odio
						tempore iste, est, quas dicta et eos provident aut saepe inventore
						molestias dignissimos animi architecto itaque. Ad veritatis
						laboriosam molestiae at soluta nesciunt voluptas quidem porro.
						Dolorum pariatur dolorem, sit cumque suscipit perferendis
						asperiores? Consectetur suscipit ducimus minus culpa corrupti
						ratione quis doloribus, non, eos odio rem, numquam impedit repellat.
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default Music;
