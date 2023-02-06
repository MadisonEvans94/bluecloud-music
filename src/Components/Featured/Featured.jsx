import React from "react";
import { motion } from "framer-motion";

const Featured = ({ featuredImg }) => {
	return (
		<motion.div
			className="featured-container"
			initial={{ x: -600, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ type: "spring", stiffness: 100, damping: 20 }}>
			<h1 className="featured-title">Featured</h1>
			<div className="featured-card">
				<div className="featured-content">
					<img src={featuredImg} alt="" />
					<p className="featured-description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sunt
						voluptatum veniam eligendi magni quaerat voluptas illo blanditiis
						earum omnis, soluta ipsam, eveniet est. Recusandae ut rum dolor aut!
						Delectus nulla in corrupti eum iure rerum maiores voluptatibus sint
						iste quidem, beatae sunt.
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default React.memo(Featured);
