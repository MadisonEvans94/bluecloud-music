import React from "react";
import Subheader from "./Subheader";
import coverImage from "../../assets/im3.png";
import Paragraph from "./Paragraph";
import AudioPlayer from "./AudioPlayer";

const FeaturedContentCard = ({ description = "description" }) => {
	return (
		<Layout>
			<Subheader text="Take Your Time" />
			<img src={coverImage} alt="img" />
			<Paragraph>{description}</Paragraph>
		</Layout>
	);
};

const Layout = ({ children }) => {
	return (
		<>
			{children[0]}
			<div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
				<div
					className="
					rounded-xl mx-auto overflow-hidden my-5 flex flex-col items-center max-w-[500px]
					"
				>
					{children[1]}
				</div>
				<div className="py-5 my-auto">
					{children[2]}
					<AudioPlayer />
				</div>
			</div>
		</>
	);
};

export default FeaturedContentCard;
