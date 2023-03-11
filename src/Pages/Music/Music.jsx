import React from "react";
import Featured from "../../Components/Featured/Featured";
import MyMusic from "../../Components/MyMusic/MyMusic";
import { BsSpotify } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";

import ExternalLinks from "../../Components/ExternalLinks/ExternalLinks";
import featuredImg from "../../assets/images/badsnacks-reference-img.png";
import News from "../../Components/News/News";
import { motion } from "framer-motion";
const Music = () => {
	return (
		<>
			<div
				className="music-page-container
			p-3">
				<Featured featuredImg={featuredImg} />
				<MyMusic />
				<div className="streaming">asdf</div>
				<News />
			</div>
		</>
	);
};

export default Music;
