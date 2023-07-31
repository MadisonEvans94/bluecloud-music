import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import LinkContainer from "./LinkContainer";
import appleMusic from "../../assets/Figma/icons/appleMusic.svg";
import spotify from "../../assets/Figma/icons/spotify.svg";
import soundcloud from "../../assets/Figma/icons/soundcloud.svg";
import bandcamp from "../../assets/Figma/icons/bandcamp.svg";

const icons = [
	{ icon: appleMusic, link: "https://google.com" },
	{ icon: spotify, link: "https://google.com" },
	{ icon: soundcloud, link: "https://google.com" },
	{ icon: bandcamp, link: "https://google.com" },
];

const PageLayout = ({ infoSection, contentSection }) => {
	return (
		<div className="mx-auto h-screen sm:grid sm:grid-cols-3">
			<div className="h-2/3 sm:h-auto sm:col-span-2 sm:order-2 order-1">
				{contentSection}
			</div>
			<div className="h-1/3 sm:h-auto sm:col-span-1 sm:order-1 order-2">
				{infoSection}
			</div>
		</div>
	);
};

const Left = () => {
	return (
		<>
			<div className="h-full flex">
				<div className="my-auto px-5">
					<Header>My Music</Header>
					<Paragraph>
						Explore 'My Music', the creative corner of an
						independent alternative electronic music producer.
						Discover enchanting soundscapes, listen to unique
						tracks, and get directed to streaming platforms for an
						immersive auditory journey
					</Paragraph>
					<LinkContainer icons={icons} />
				</div>
			</div>
		</>
	);
};

const Right = () => {
	return (
		<>
			<div
				className="px-5 relative h-full bg-cover bg-center"
				style={{
					backgroundImage: `url('https://images.unsplash.com/photo-1589144669495-b5905b68ea9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80')`,
				}}
			>
				<Header>Song</Header>
			</div>
		</>
	);
};

const Music = () => {
	return <PageLayout infoSection={<Left />} contentSection={<Right />} />;
};

export default Music;
