import React from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
import CatalogContainer from "../CatalogContainer/CatalogContainer";
import { motion } from "framer-motion";

const MyMusic = () => {
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
			className="my-music border
			
			md:my-6 ">
			<h2
				className="section-title
				">
				My Music
			</h2>
			<CatalogContainer>
				<CatalogItem
					url={
						"https://open.spotify.com/track/79g4tEvmrLXDMiJqUwcbWb?si=b823ba81c788482e"
					}
				/>
				<CatalogItem
					url={
						"https://open.spotify.com/track/5cMIqFsmiqe6aqfS22O97N?si=c7c4a101cf584082"
					}
				/>
				<CatalogItem
					url={
						"https://open.spotify.com/track/7CMlAr5XhOio8SZ3tWsUGz?si=8a3a4a6dd3bd480e"
					}
				/>
				<CatalogItem
					url={
						"https://open.spotify.com/track/1n3Aj9dSfpd5omHpyRsRon?si=b4a51e1de50c49da"
					}
				/>
			</CatalogContainer>
		</motion.div>
	);
};

export default MyMusic;
