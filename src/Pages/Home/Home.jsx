import React from "react";
import playButton from "../../assets/Figma/icons/playButton.svg";

const Home = () => {
	return (
		<>
			<Header text="Header" />
			<SubHeader text="Subheader" />
			<AudioPlayer />
			<LinkContainer />
			<BlogCard />
		</>
	);
};

export default Home;

function Header({ text }) {
	return <h1 className="text-info ">{text}</h1>;
}

function SubHeader({ text }) {
	return <h2>{text}r</h2>;
}

function AudioPlayer() {
	return (
		<div className="border border-info">
			<img src={playButton} alt="playButton" />
		</div>
	);
}

function LinkContainer() {
	return <div>link container</div>;
}

function BlogCard() {
	return <div>blog card</div>;
}
