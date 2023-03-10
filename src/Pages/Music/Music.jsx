import React from "react";
import Featured from "../../Components/Featured/Featured";
import MyMusic from "../../Components/MyMusic/MyMusic";
import sampleImg from "../../assets/images/FACEPLANT.png";
import ExternalLinks from "../../Components/ExternalLinks/ExternalLinks";
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
