import React from "react";
import { motion } from "framer-motion";
import CatalogItem from "../CatalogItem/CatalogItem";
import { useState } from "react";
const Featured = ({ featuredImg }) => {
	const [animationComplete, setAnimationComplete] = useState(false);
	const handleAnimationComplete = () => {
		setAnimationComplete(true);
	};
	return (
		<motion.div
			initial={{ x: "-20vw", opacity: 0 }}
			animate={{
				x: 0,
				opacity: 1,
				transition: { type: "spring", stiffness: 40, damping: 10 },
			}}
			exit={{
				x: "-50vw",
				opacity: 0,
				transition: {
					type: "tween",
					ease: "easeInOut",
					duration: 0.8,
				},
			}}
			onAnimationComplete={handleAnimationComplete}
			className="featured
			flex flex-col items-center px-2 h-full w-full
			">
			<h1 className="section-title">Featured</h1>
			<div
				className="
				mx-auto p-6 w-full h-fit flex flex-row  items-center justify-center 
				">
				<CatalogItem />
				<div
					className=" 
					mx-auto flex flex-row justify-center w-1/2 text-white">
					<div
						className="
						
						">
						<h3 className="text-md md:text-xl mb-3 lg:mt-4">
							Lucky - Blue Cloud Remix
						</h3>
						<p>
							Introducing my latest remix of Bad Snacks' hit track 'Lucky'! I
							really enjoyed having the opportunity to bring some of my unique
							sound palette to this track in particular. And I couldn't be more
							proud of the result. Don't miss out - click on the link and give
							it a listen!
						</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default React.memo(Featured);
