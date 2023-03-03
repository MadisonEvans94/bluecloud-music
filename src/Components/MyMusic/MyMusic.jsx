import React from "react";
import CatalogItem from "../CatalogItem/CatalogItem";

import CatalogContainer from "../CatalogContainer/CatalogContainer";
import { motion } from "framer-motion";
const MyMusic = () => {
	return (
		<motion.div
			className="my-music-container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ type: "spring", stiffness: 40, damping: 10 }}>
			<h2 className="music-page-header alt-header">My Music</h2>
			<CatalogContainer>
				<CatalogItem url={"https://soundcloud.com/bluecloudmusic/presence"} />
				<CatalogItem
					url={"https://soundcloud.com/bluecloudmusic/more-than-enough-1"}
				/>
				<CatalogItem url={"https://soundcloud.com/bluecloudmusic/faded-2"} />
				<CatalogItem
					url={"https://soundcloud.com/bluecloudmusic/i-think-were-lost-2"}
				/>
				<CatalogItem url={"https://soundcloud.com/bluecloudmusic/jelly"} />
			</CatalogContainer>
		</motion.div>
	);
};

export default MyMusic;
