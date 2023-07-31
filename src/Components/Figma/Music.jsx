import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import LinkContainer from "./LinkContainer";
import appleMusic from "../../assets/Figma/icons/appleMusic.svg";
import spotify from "../../assets/Figma/icons/spotify.svg";
import soundcloud from "../../assets/Figma/icons/soundcloud.svg";
import bandcamp from "../../assets/Figma/icons/bandcamp.svg";
import AudioPlayer from "./AudioPlayer";
import PrimaryLayout from "./PrimaryLayout";

const icons = [
	{ icon: appleMusic, link: "https://google.com" },
	{ icon: spotify, link: "https://google.com" },
	{ icon: soundcloud, link: "https://google.com" },
	{ icon: bandcamp, link: "https://google.com" },
];

const Left = () => {
	return (
		<>
			<div className="h-full flex">
				<div className="my-auto px-5">
					<Header>My Music</Header>
					<Paragraph>
						Explore 'My Music', the creative corner of an
						independent alternative electronic music producer.
						Discover enchanting soundscapes
					</Paragraph>
					<LinkContainer icons={icons} className="" />
				</div>
			</div>
		</>
	);
};

const Right = () => {
	return (
		<>
			<div
				className="pl-10 pr-24 flex flex-col justify-center my-auto relative h-full bg-cover bg-center"
				style={{
					backgroundImage: `url('https://images.unsplash.com/photo-1589144669495-b5905b68ea9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80')`,
				}}
			>
				<Header>Song</Header>
				<Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Accusantium eius totam amet soluta sequi possimus libero
					neque sapiente repudiandae voluptatem?
				</Paragraph>
				<AudioPlayer className="my-5" />
			</div>
		</>
	);
};

const Music = () => {
	return (
		<>
			<PrimaryLayout infoSection={<Left />} contentSection={<Right />} />
		</>
	);
};

export default Music;
