import React from "react";
import { BsSpotify } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";
import { motion } from "framer-motion";
const Streaming = () => {
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
			className="streaming border
            w-full my-6 px-auto flex flex-row justify-around items-center
    		">
			<div className="h-full flex flex-row">
				<BsSpotify size="6em" color="white" />
			</div>
			<div className="h-full flex flex-row ">
				<FaApple size="6em" color="white" />
			</div>
			<div className="h-full flex flex-row ">
				<FaSoundcloud size="6em" color="white" />
			</div>
		</motion.div>
	);
};

export default Streaming;
