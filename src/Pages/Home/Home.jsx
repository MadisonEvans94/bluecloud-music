import React from "react";
import AudioPlayer from "../../Components/Figma/AudioPlayer";
import LinkContainer from "../../Components/Figma/LinkContainer";
import appleMusic from "../../assets/Figma/icons/appleMusic.svg";
import spotify from "../../assets/Figma/icons/spotify.svg";
import soundcloud from "../../assets/Figma/icons/soundcloud.svg";
import bandcamp from "../../assets/Figma/icons/bandcamp.svg";
const Home = () => {
	const icons = [appleMusic, spotify, soundcloud, bandcamp];
	return (
		<>
			<Header text="Header" />
			<SubHeader text="Subheader" />
			<AudioPlayer size="small" />
			<LinkContainer icons={icons} />
			<BlogCard />
		</>
	);
};

export default Home;

function Header({ text }) {
	return <h1 className="text-heading1 text-info">{text}</h1>;
}

function SubHeader({ text }) {
	return <h2 className="text-heading2 text-info">{text}</h2>;
}

function BlogCard() {
	return <div>blog card</div>;
}
