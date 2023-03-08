import React from "react";
import { motion } from "framer-motion";
import CatalogItem from "../CatalogItem/CatalogItem";
const Featured = ({ featuredImg }) => {
	return (
		<motion.div className="featured-container">
			<h1 className="music-page-header alt-header">Featured</h1>
			<div className="featured-card">
				<div className="featured-content">
					<CatalogItem
						url={
							"https://soundcloud.com/bad-snacks/lucky-blue-cloud-remix?si=1b847eac94c248b7a9771941ed9c1ecf&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
						}
					/>
					<p className="featured-description">
						Introducing my latest remix of Bad Snacks' hit track 'Lucky'! I
						really enjoyed having the opportunity to bring some of my unique
						sound palette to this track in particular. And I couldn't be more
						proud of the result. Don't miss out - click on the link and give it
						a listen!
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default React.memo(Featured);
