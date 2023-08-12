import React from "react";
import Header from "./Utility/Header";
import Paragraph from "./Utility/Paragraph";
import AudioPlayer from "./Utility/AudioPlayer";
// TODO
const MusicContent = React.forwardRef(({ className }, ref) => {
	return (
		<div
			ref={ref}
			id="music"
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

export default MusicContent;
