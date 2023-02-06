import React from "react";
import { motion } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";
const CatalogItem = ({ song, img }) => {
	return (
		<>
			<div className="catalog-item">
				<motion.button
					className="song-overlay"
					initial={{ opacity: 0, transition: { duration: 0.1 } }}
					whileHover={{
						opacity: 1,
						transition: { duration: 0.1 },
					}}>
					<FaPlayCircle
						size="30%"
						color="white"
						style={{ cursor: "pointer" }}
					/>
				</motion.button>

				<img src={img} alt="" />
			</div>
		</>
	);
};

export default CatalogItem;
