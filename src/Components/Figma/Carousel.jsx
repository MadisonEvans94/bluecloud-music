import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
	AiFillCaretLeft as Left,
	AiFillCaretRight as Right,
} from "react-icons/ai";

const Carousel = ({ items, autoSlide = false, autoSlideInterval = 3000 }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((currentIndex + 1) % items.length);
	};

	const prevSlide = () => {
		setCurrentIndex((currentIndex - 1 + items.length) % items.length);
	};

	useEffect(() => {
		if (autoSlide) {
			const interval = setInterval(nextSlide, autoSlideInterval);
			return () => clearInterval(interval);
		}
	}, [autoSlide, autoSlideInterval, currentIndex]);

	return (
		<div className="relative flex items-center overflow-hidden">
			<div
				className="drop-shadow-default hover:drop-shadow-hover active:drop-shadow-active transition absolute text-info top-1/2 left-0 transform -translate-y-1/2 z-50 flex items-center cursor-pointer"
				onClick={prevSlide}
			>
				<Left size="5em" />
			</div>

			{/* TODO: Implement framer motion transition here... */}
			<div
				className="flex w-full h-3/4 mx-24"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
				transition={{ duration: 0.5 }}
			>
				{items.map((item, i) => (
					<div key={i} className="w-full flex-none">
						{item}
					</div>
				))}
			</div>

			<div
				className="drop-shadow-default hover:drop-shadow-hover active:drop-shadow-active transition text-info absolute top-1/2 right-0 transform -translate-y-1/2 z-50 flex items-center cursor-pointer"
				onClick={nextSlide}
			>
				<Right size="5em" />
			</div>

			<div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-4">
				{items.map((_, i) => (
					<div
						key={i}
						className={`w-2 h-2 rounded-full transition ${
							i === currentIndex
								? "bg-white"
								: "bg-white opacity-50"
						}`}
					></div>
				))}
			</div>
		</div>
	);
};

export default Carousel;
