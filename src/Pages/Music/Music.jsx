import React from "react";
import Featured from "../../Components/Featured/Featured";
import MyMusic from "../../Components/MyMusic/MyMusic";

import Streaming from "../../Components/Streaming/Streaming";

import News from "../../Components/News/News";

const Music = () => {
	return (
		<>
			<div
				className="music-page-container
			p-10">
				<Featured />
				<MyMusic />
				<Streaming />
				<News />
			</div>
		</>
	);
};

export default Music;
