import React from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
import img from "../../assets/images/songImg.png";
import { motion } from "framer-motion";
const MyMusic = () => {
	return (
		<motion.div
			className="my-music-container"
			initial={{ x: 600, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ type: "spring", stiffness: 100, damping: 20 }}>
			<h2 className="my-music-header">My Music</h2>

			<div className="music-list-card">
				<CatalogItem img={img} />
			</div>
		</motion.div>
	);
};

export default MyMusic;
