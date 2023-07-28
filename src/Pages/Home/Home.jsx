import React from "react";
import playButton from "../../assets/Figma/icons/playButton.svg";
// TODO:
// [ ] header component
// [ ] subheader component
// [ ] audio player component
// [ ] link container component
// [ ] blog card component
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
	return <h1>{text}</h1>;
}

function SubHeader({ text }) {
	return <h2>{text}r</h2>;
}

function AudioPlayer() {
	return (
		<div>
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
