import React from "react";
import Subheader from "../../Components/Figma/Subheader";
import BlogCard from "../../Components/Figma/BlogCard";
import AudioPlayer from "../../Components/Figma/AudioPlayer";
import LinkContainer from "../../Components/Figma/LinkContainer";
import appleMusic from "../../assets/Figma/icons/appleMusic.svg";
import spotify from "../../assets/Figma/icons/spotify.svg";
import soundcloud from "../../assets/Figma/icons/soundcloud.svg";
import bandcamp from "../../assets/Figma/icons/bandcamp.svg";
import Header from "../../Components/Figma/Header";
import Display from "../../Components/Figma/Display";
const Home = () => {
	const icons = [
		{ icon: appleMusic, link: "https://google.com" },
		{ icon: spotify, link: "https://google.com" },
		{ icon: soundcloud, link: "https://google.com" },
		{ icon: bandcamp, link: "https://google.com" },
	];
	return (
		<>
			<Header text="Header" />
			<Subheader text="Subheader" />
			<AudioPlayer size="small" />
			<LinkContainer icons={icons} />
			<BlogCard />
			<Display text="Display" />
		</>
	);
};

export default Home;
