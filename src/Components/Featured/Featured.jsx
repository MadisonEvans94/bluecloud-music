import React from "react";
import { motion } from "framer-motion";
import CatalogItem from "../CatalogItem/CatalogItem";

const Featured = () => {
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
			className="featured
			flex flex-col items-center h-full w-full my-6
			md:my-0
			">
			<h1 className="section-title">Featured</h1>

			<div
				className=" 
				flex flex-col w-full mx-auto text-white
				md:items-center md:justify-center md:px-8	
		
				">
				<CatalogItem
					url={
						"https://open.spotify.com/track/0KBH6hsf0J8s0PfBfANwcS?si=79556ff2d8974232"
					}
				/>
				{/*  */}

				<div
					className=" 
					w-80 flex flex-col items-center mx-auto
					md:w-full 
					">
					<h3
						className="
						my-3 text-xl
						md:text-2xl">
						Lucky - Blue Cloud Remix
					</h3>
					<p className="w-full">
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
