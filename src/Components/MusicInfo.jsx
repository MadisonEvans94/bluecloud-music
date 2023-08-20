import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Utility/Header";
import Paragraph from "./Utility/Paragraph";
import LinkContainer from "./Utility/LinkContainer";
import appleMusic from "../assets/Figma/icons/appleMusic.svg";
import spotify from "../assets/Figma/icons/spotify.svg";
import soundcloud from "../assets/Figma/icons/soundcloud.svg";
import bandcamp from "../assets/Figma/icons/bandcamp.svg";

const icons = [
	{
		icon: appleMusic,
		link: "https://music.apple.com/us/artist/blue-cloud/1510449426",
	},
	{
		icon: spotify,
		link: "https://open.spotify.com/artist/3W9mqyUptTa6FdiwM9SH11",
	},
	{ icon: soundcloud, link: "https://soundcloud.com/bluecloudmusic" },
	{ icon: bandcamp, link: "https://bluecloudmusic.bandcamp.com/" },
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
						Find all my latest releases in one place
					</Paragraph>
					<LinkContainer icons={icons} />
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default MusicInfo;
