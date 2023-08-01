import React, { useRef, useEffect, useState } from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import LinkContainer from "./LinkContainer";
import appleMusic from "../../assets/Figma/icons/appleMusic.svg";
import spotify from "../../assets/Figma/icons/spotify.svg";
import soundcloud from "../../assets/Figma/icons/soundcloud.svg";
import bandcamp from "../../assets/Figma/icons/bandcamp.svg";
import PrimaryLayout from "./PrimaryLayout";
import { motion, AnimatePresence } from "framer-motion";
import BlogContent from "./BlogContent";
import ContactContent from "./ContactContent";
import MusicContent from "./MusicContent";
import StoreContent from "./StoreContent";

const icons = [
	{ icon: appleMusic, link: "https://google.com" },
	{ icon: spotify, link: "https://google.com" },
	{ icon: soundcloud, link: "https://google.com" },
	{ icon: bandcamp, link: "https://google.com" },
];

const StoreInfo = () => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="h-full flex"
			>
				<div className="my-auto px-5">
					<Header>Store</Header>
					<Paragraph>Sample Packs, Plugins, and much more</Paragraph>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

const MusicInfo = () => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="h-full flex"
			>
				<div className="my-auto px-5">
					<Header>My Music</Header>
					<Paragraph>
						Explore 'My Music', the creative corner of an
						independent alternative electronic music producer.
						Discover enchanting soundscapes
					</Paragraph>
					<LinkContainer icons={icons} className="" />
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

const BlogInfo = () => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="h-full flex"
			>
				<div className="my-auto px-5">
					<Header>Blogs</Header>
					<Paragraph>
						Explore 'My Music', the creative corner of an
						independent alternative electronic music producer.
						Discover enchanting soundscapes
					</Paragraph>
					<LinkContainer icons={icons} className="" />
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

const ContactInfo = () => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="h-full flex"
			>
				<div className="my-auto px-5">
					<Header>Get In Touch</Header>
					<Paragraph>
						Explore 'My Music', the creative corner of an
						independent alternative electronic music producer.
						Discover enchanting soundscapes
					</Paragraph>
					<LinkContainer icons={icons} className="" />
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

const Home = () => {
	const [infoSection, setInfoSection] = useState(<MusicInfo />); // setting initial state to MusicInfo

	const musicRef = useRef();
	const storeRef = useRef();
	const blogRef = useRef();
	const contactRef = useRef();

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						switch (entry.target.id) {
							case "music":
								setInfoSection(<MusicInfo />);
								break;
							case "store":
								setInfoSection(<StoreInfo />);
								break;
							case "blog":
								setInfoSection(<BlogInfo />);
								break;
							case "contact":
								setInfoSection(<ContactInfo />);
								break;

							default:
								setInfoSection(<MusicInfo />);
								break;
						}
					}
				});
			},
			{
				threshold: 1, // trigger callback when at least 10% of the target is visible
			}
		);

		if (musicRef.current) {
			observer.observe(musicRef.current);
		}

		if (storeRef.current) {
			observer.observe(storeRef.current);
		}
		if (blogRef.current) {
			observer.observe(blogRef.current);
		}

		if (contactRef.current) {
			observer.observe(contactRef.current);
		}
	}, []);

	return (
		<>
			<PrimaryLayout
				infoSection={infoSection}
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
