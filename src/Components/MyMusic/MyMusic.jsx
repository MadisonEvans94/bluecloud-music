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
			className="my-music my-6
			md:my-0">
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
						"https://open.spotify.com/track/79g4tEvmrLXDMiJqUwcbWb?si=b823ba81c788482e"
					}
				/>
				<CatalogItem
					url={
						"https://open.spotify.com/track/79g4tEvmrLXDMiJqUwcbWb?si=b823ba81c788482e"
					}
				/>
				<CatalogItem
					url={
						"https://open.spotify.com/track/79g4tEvmrLXDMiJqUwcbWb?si=b823ba81c788482e"
					}
				/>
				<CatalogItem
					url={
						"https://open.spotify.com/track/79g4tEvmrLXDMiJqUwcbWb?si=b823ba81c788482e"
					}
				/>
				<CatalogItem
					url={
						"https://open.spotify.com/track/79g4tEvmrLXDMiJqUwcbWb?si=b823ba81c788482e"
					}
				/>
			</CatalogContainer>
		</motion.div>
	);
};

export default MyMusic;
