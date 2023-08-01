import React, { useRef, useEffect } from "react";
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

// const StoreInfo = () => {
// 	return (
// 		<>
// 			<div className="h-full flex">
// 				<div className="my-auto px-5">
// 					<Header>Store</Header>
// 					<Paragraph>Sample Packs, Plugins, and much more</Paragraph>
// 				</div>
// 			</div>
// 		</>
// 	);
// };
const MusicInfo = () => {
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

// Content Sections

// TODO
const StoreContent = React.forwardRef(({ className }, ref) => {
	return (
		<div
			ref={ref}
			className={`h-screen pl-10 pr-24 flex flex-col justify-center my-auto relative bg-cover bg-center snap-center ${className}`}
		>
			<Header>Sample Pack</Header>
			<Paragraph>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Accusantium eius totam amet soluta sequi possimus libero neque
				sapiente repudiandae voluptatem?
			</Paragraph>
		</div>
	);
});

// TODO
const MusicContent = React.forwardRef(({ className }, ref) => {
	return (
		<div
			ref={ref}
			className={`pl-10 pr-24 flex flex-col justify-center my-auto relative h-screen bg-cover bg-center snap-center ${className}`}
			style={{
				backgroundImage: `url('https://images.unsplash.com/photo-1589144669495-b5905b68ea9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80')`,
			}}
		>
			<Header>Song</Header>
			<Paragraph>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Accusantium eius totam amet soluta sequi possimus libero neque
				sapiente repudiandae voluptatem?
			</Paragraph>
			<AudioPlayer className="my-5" />
		</div>
	);
});

// TODO
const ContactContent = React.forwardRef(({ className }, ref) => {
	return (
		<div
			ref={ref}
			className={`pl-10 pr-24 flex flex-col justify-center my-auto relative h-screen bg-cover bg-center snap-center ${className}`}
		>
			<Header>Get in Touch</Header>
			<Paragraph>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Accusantium eius totam amet soluta sequi possimus libero neque
				sapiente repudiandae voluptatem?
			</Paragraph>
		</div>
	);
});

// TODO
const BlogContent = React.forwardRef(({ className }, ref) => {
	return (
		<div
			ref={ref}
			className={`pl-10 pr-24 flex flex-col justify-center my-auto relative h-screen bg-cover bg-center snap-center ${className}`}
		>
			<Header>Blogs</Header>
			<Paragraph>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Accusantium eius totam amet soluta sequi possimus libero neque
				sapiente repudiandae voluptatem?
			</Paragraph>
		</div>
	);
});

const Home = () => {
	const musicRef = useRef();
	const storeRef = useRef();
	const blogRef = useRef();
	const contactRef = useRef();
	useEffect(() => {
		console.log(musicRef.current, "MUSIC REF");
	}, []);
	return (
		<>
			<PrimaryLayout
				infoSection={<MusicInfo />}
				contentSection={
					<>
						<MusicContent ref={musicRef} />
						<StoreContent ref={storeRef} />
						<BlogContent ref={blogRef} />
						<ContactContent ref={contactRef} />
					</>
				}
			/>
		</>
	);
};

export default Home;
