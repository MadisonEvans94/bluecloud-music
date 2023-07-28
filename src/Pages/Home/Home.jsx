import React from "react";
import AudioPlayer from "../../Components/Figma/AudioPlayer";

const Home = () => {
	return (
		<>
			<Header text="Header" />
			<SubHeader text="Subheader" />
			<AudioPlayer size="small" />
			<LinkContainer />
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

function LinkContainer() {
	return <div>link container</div>;
}

function BlogCard() {
	return <div>blog card</div>;
}
