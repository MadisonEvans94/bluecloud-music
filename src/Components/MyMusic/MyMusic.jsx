import React from "react";
import CatalogItem from "../CatalogItem/CatalogItem";

import CatalogContainer from "../CatalogContainer/CatalogContainer";
import { motion } from "framer-motion";
const MyMusic = () => {
	return (
		<motion.div
			className="my-music-container"
			initial={{ x: 300, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ type: "spring", stiffness: 40, damping: 10 }}>
			<h2 className="my-music-header">My Music</h2>
			<CatalogContainer>
				<CatalogItem url={"https://soundcloud.com/bluecloudmusic/presence"} />
				<CatalogItem
					url={"https://soundcloud.com/bluecloudmusic/more-than-enough-1"}
				/>
				<CatalogItem url={"https://soundcloud.com/bluecloudmusic/presence"} />
			</CatalogContainer>
		</motion.div>
	);
};

export default MyMusic;
