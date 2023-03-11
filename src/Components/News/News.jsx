import React from "react";
import { motion } from "framer-motion";
const News = () => {
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
			className="news border
            flex flex-col items-center w-full">
			<h2 className="section-title">News</h2>
			<div
				className="w-120
                mx-4 p-6 text-white 
                rounded-2xl mb-8 min-h-68 card
                text-md
                md:text-md
                lg:text-md
                xl:text-md
                
                ">
				Hey everyone! You might have noticed that I've been a bit quiet on the
				music front lately, but that's because I've been hard at work behind the
				scenes. I've been taking some time away from creating to really hone my
				technical skills and perfect my craft. In addition to music production,
				I've been expanding my knowledge into different tech-related spaces like
				web design and programming virtual sound instruments. I've also been
				working on creating a line of downloadable products for music producers,
				including sample packs and plugins that I'm excited to release soon on
				my site. Thanks for your patience and support, and stay tuned for more
				updates!
			</div>
		</motion.div>
	);
};

export default News;
