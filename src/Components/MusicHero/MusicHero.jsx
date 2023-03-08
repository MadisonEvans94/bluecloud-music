import React from "react";
import { motion } from "framer-motion";
import { BsSpotify } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";

const MusicHero = () => {
	return (
		<motion.div
			style={{ borderBottom: "solid 1px white" }}
			className="hero-section w-full md:h-60 h-40 flex justify-center items-center">
			<motion.div className="mx-16">
				<div>
					<a href="https://open.spotify.com/artist/3W9mqyUptTa6FdiwM9SH11">
						<BsSpotify size="4em" style={{ cursor: "pointer" }} />
					</a>
				</div>
			</motion.div>
			<motion.div>
				<div className="">
					<a href="https://music.apple.com/us/artist/blue-cloud/1510449426">
						<FaApple size="4em" style={{ cursor: "pointer" }} />
					</a>
				</div>
			</motion.div>
			<motion.div>
				<div className="mx-16">
					<a href="https://soundcloud.com/bluecloudmusic">
						<FaSoundcloud size="4em" style={{ cursor: "pointer" }} />
					</a>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default MusicHero;
