import React from "react";
import Featured from "../../Components/Featured/Featured";
import MyMusic from "../../Components/MyMusic/MyMusic";

import Streaming from "../../Components/Streaming/Streaming";
import featuredImg from "../../assets/images/badsnacks-reference-img.png";
import News from "../../Components/News/News";

const Music = () => {
	return (
		<>
			<div
				className="music-page-container
			p-10">
				<Featured featuredImg={featuredImg} />
				<MyMusic />
				<Streaming />
				<News />
			</div>
		</>
	);
};

export default Music;
