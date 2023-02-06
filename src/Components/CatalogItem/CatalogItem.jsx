import React from "react";
import { motion } from "framer-motion";
const CatalogItem = ({ song, img }) => {
	return (
		<>
			<div className="catalog-item">
				<motion.div
					className="song-overlay"
					initial={{ opacity: 0, transition: { duration: 0.1 } }}
					whileHover={{ opacity: 1, transition: { duration: 0.1 } }}
				/>
				<img src={img} alt="" />
			</div>
		</>
	);
};

export default CatalogItem;
