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
			className="featured-container 
			flex flex-col items-center px-2 h-full
			">
			<h1 className="music-page-header alt-header">Featured</h1>
			<div
				className="card 
				mx-auto p-6 w-fit h-fit flex flex-col justify-center items-center  rounded-lg
			
				">
				<div
					className=" featured
					w-60
					md:w-72 
					lg:w-80
					xl:w-fit xl:flex xl:flex-row ">
					<CatalogItem
						url={
							"https://soundcloud.com/bad-snacks/lucky-blue-cloud-remix?si=1b847eac94c248b7a9771941ed9c1ecf&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
						}
						animationComplete={animationComplete}
					/>
					<div
						className="
					w-60 my-4
					md:w-72 
					lg:w-80 lg:my-auto 
					xl:ml-4
					flex flex-col 
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
