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
import FeaturedContentCard from "../../Components/Figma/FeaturedContentCard";
const Home = () => {
	// TODO:

	const icons = [
		{ icon: appleMusic, link: "https://google.com" },
		{ icon: spotify, link: "https://google.com" },
		{ icon: soundcloud, link: "https://google.com" },
		{ icon: bandcamp, link: "https://google.com" },
	];
	const testBlogArray = [
		{
			title: "Using AI effectively in Production",
			description:
				"AI has started to make a big impact, and while it may seem like uncharted...",
		},
	];

	const description =
		"This song is a really good song. This sentence is a descriptor of the song and should talk about how awesome the song is. I really hope yall enjoy it. I worked pretty hard on it. Here's another sentence just for good measure.And here's another sentence again to make the box more filled out lol. ";

	return (
		<>
			<Header text="New Releases" />
			<FeaturedContentCard description={description} />
			<AudioPlayer size="small" />
			<Header text="Connect" />
			<Subheader text="My Music" />
			<LinkContainer icons={icons} />
			<Subheader text="Follow Me" />
			<LinkContainer icons={icons} />
			<Header text="Blogs" />
			{testBlogArray.map((blog) => (
				<BlogCard blog={blog} />
			))}
		</>
	);
};

export default Home;
