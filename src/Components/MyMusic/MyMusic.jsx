import React from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
import { useState } from "react";
import CatalogContainer from "../CatalogContainer/CatalogContainer";
import { motion } from "framer-motion";

import sample1 from "../../assets/im1.png";
import sample2 from "../../assets/im2.png";
import sample3 from "../../assets/im3.png";
import sample4 from "../../assets/im4.png";
import sampleImg from "../../assets/images/FACEPLANT.png";
const MyMusic = () => {
	const [animationComplete, setAnimationComplete] = useState(false);

	const handleAnimationComplete = () => {
		setAnimationComplete(true);
	};
	return (
		<motion.div
			initial={{ x: "20vw", opacity: 0 }}
			animate={{
				x: 0,
				opacity: 1,
				transition: { type: "spring", stiffness: 40, damping: 10 },
			}}
			exit={{
				x: "50vw",
				opacity: 0,
				transition: {
					type: "tween",
					ease: "easeInOut",
					duration: 0.8,
				},
			}}
			onAnimationComplete={handleAnimationComplete}
			className="my-music h-full 
			mx-auto overflow-hidden">
			<h2
				className="section-title
				">
				My Music
			</h2>
			<CatalogContainer>
				<CatalogItem url={"https://soundcloud.com/bluecloudmusic/presence"} />
				<CatalogItem
					url={"https://soundcloud.com/bluecloudmusic/more-than-enough-1"}
				/>
				<CatalogItem url={"https://soundcloud.com/bluecloudmusic/faded-2"} />
				<CatalogItem
					url={"https://soundcloud.com/bluecloudmusic/i-think-were-lost-2"}
				/>
			</CatalogContainer>
		</motion.div>
	);
};

export default MyMusic;
