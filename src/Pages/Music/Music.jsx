import React from "react";
import Featured from "../../Components/Featured/Featured";
import MyMusic from "../../Components/MyMusic/MyMusic";
import { BsSpotify } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";

import ExternalLinks from "../../Components/ExternalLinks/ExternalLinks";
import featuredImg from "../../assets/images/badsnacks-reference-img.png";
import News from "../../Components/News/News";
import { motion } from "framer-motion";
const Music = () => {
	return (
		<>
			<div className="music-page-container">
				<Featured featuredImg={featuredImg} />
				<MyMusic />
				<div
					className="
					flex flex-row news-and-links">
					<News />
					<motion.div
						initial={{ opacity: 0, y: 500 }}
						animate={{
							opacity: 1,
							y: 0,
							transition: { type: "spring", stiffness: 40, damping: 10 },
						}}
						exit={{
							opacity: 0,
							y: 500,
							transition: {
								type: "tween",
								ease: "easeInOut",
								duration: 0.8,
							},
						}}
						className="
						w-3/4 h-3/4 img-background m-auto flex flex-row justify-center items-center
					 	">
						<motion.div
							initial={{ scale: 1 }}
							whileHover={{ scale: 1.05 }}
							className="p-6">
							<BsSpotify size="100%" color="white" cursor="pointer" />
						</motion.div>
						<motion.div
							initial={{ scale: 1 }}
							whileHover={{ scale: 1.05 }}
							className="p-6">
							<FaApple size="100%" color="white" cursor="pointer" />
						</motion.div>
						<motion.div
							initial={{ scale: 1 }}
							whileHover={{ scale: 1.05 }}
							className="p-6">
							<FaSoundcloud size="100%" color="white" cursor="pointer" />
						</motion.div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Music;
