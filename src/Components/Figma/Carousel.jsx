import React from "react";
import { motion } from "framer-motion";
import {
	AiFillCaretLeft as Left,
	AiFillCaretRight as Right,
} from "react-icons/ai";

const Carousel = ({ items }) => {
	return (
		<div className="flex flex-row">
			<div className="text-info flex flex-row items-center drop-shadow-default hover:drop-shadow-hover active:drop-shadow-active transition cursor-pointer">
				<Left size="5em" />
			</div>
			<motion.div className="no-scrollbar flex flex-row overflow-auto scrollbar-hide">
				{items.map((item, i) => (
					<div key={i} className="object-cover lg:mx-5">
						{item}
					</div>
				))}
			</motion.div>
			<div className="text-info flex flex-row items-center drop-shadow-default hover:drop-shadow-hover active:drop-shadow-active transition cursor-pointer">
				<Right size="5em" />
			</div>
		</div>
	);
};

export default Carousel;
