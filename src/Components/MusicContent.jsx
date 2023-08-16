import React from "react";
import Header from "./Utility/Header";
import Paragraph from "./Utility/Paragraph";
import AudioPlayer from "./Utility/AudioPlayer";
import { useContext } from "react";
import AppContext from "../Context/AppContext";

const MusicContent = React.forwardRef(({ className, featured }, ref) => {
	const { audioTest } = useContext(AppContext);
	return (
		<div
			ref={ref}
			id="music"
			className={`pl-10 pr-24 flex flex-col justify-center my-auto relative h-screen bg-cover bg-center snap-center ${className}`}
			style={{ position: "relative" }}
		>
			<img
				src={featured.imgUrl}
				alt={featured.title}
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					zIndex: -1,
					objectFit: "cover",
				}}
			/>
			<Header>{featured.title}</Header>
			<Paragraph>{featured.description}</Paragraph>
			<AudioPlayer className="mt-12" url={audioTest} />
		</div>
	);
});

export default MusicContent;
