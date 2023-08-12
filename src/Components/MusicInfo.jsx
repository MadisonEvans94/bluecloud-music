import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./utility/Header";
import Paragraph from "./utility/Paragraph";
import LinkContainer from "./LinkContainer";
import appleMusic from "../assets/Figma/icons/appleMusic.svg";
import spotify from "../assets/Figma/icons/spotify.svg";
import soundcloud from "../assets/Figma/icons/soundcloud.svg";
import bandcamp from "../assets/Figma/icons/bandcamp.svg";

const icons = [
	{ icon: appleMusic, link: "https://google.com" },
	{ icon: spotify, link: "https://google.com" },
	{ icon: soundcloud, link: "https://google.com" },
	{ icon: bandcamp, link: "https://google.com" },
];

const MusicInfo = () => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="h-full flex"
			>
				<div className="my-auto px-5">
					<Header>My Music</Header>
					<Paragraph>
						Explore 'My Music', the creative corner of an
						independent alternative electronic music producer.
						Discover enchanting soundscapes
					</Paragraph>
					<LinkContainer icons={icons} className="" />
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default MusicInfo;
