import React from "react";
import { motion } from "framer-motion";

const Carousel = ({ items }) => {
	return (
		<motion.div className="no-scrollbar flex flex-col lg:flex-row overflow-auto scrollbar-hide">
			{items.map((item, i) => (
				<div key={i} className="aspect-[3/2] object-cover lg:mx-5">
					{item}
				</div>
			))}
		</motion.div>
	);
};

export default Carousel;
