import React from "react";
import Featured from "../../Components/Featured/Featured";
import MusicHero from "../../Components/MusicHero/MusicHero";
import spotifyIcon from "../../assets/svg/iOS/spotify-icon.svg";
import MyMusic from "../../Components/MyMusic/MyMusic";
import "./Music.css";
import featuredImg from "../../assets/images/badsnacks-reference-img.png";

const Music = () => {
	return (
		<>
			<div className="music-page-container">
				<MusicHero icon={spotifyIcon} />
				<Featured featuredImg={featuredImg} />
				<MyMusic />
			</div>
		</>
	);
};

export default Music;
