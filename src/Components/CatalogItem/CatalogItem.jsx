import React from "react";
// import { motion } from "framer-motion";
// import { FaPlayCircle } from "react-icons/fa";
const CatalogItem = ({ img }) => {
	return (
		<>
			<div className="catalog-item">
				<img
					src={img}
					style={{
						objectFit: "contain",
						objectPosition: "center",
						width: "14rem",
					}}
					alt="cover"
				/>
			</div>
		</>
	);
};

export default CatalogItem;
