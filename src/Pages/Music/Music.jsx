import React from "react";
import Featured from "../../Components/Featured/Featured";
import MyMusic from "../../Components/MyMusic/MyMusic";

import featuredImg from "../../assets/images/badsnacks-reference-img.png";
import News from "../../Components/News/News";
const Music = () => {
	return (
		<>
			<div className="music-page-container">
				<Featured featuredImg={featuredImg} />
				<MyMusic />
				<News />
			</div>
		</>
	);
};

export default Music;
