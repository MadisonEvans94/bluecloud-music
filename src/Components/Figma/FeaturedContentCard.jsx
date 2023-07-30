import React from "react";
import Subheader from "./Subheader";
import coverImage from "../../assets/im3.png";
import Paragraph from "./Paragraph";
import AudioPlayer from "./AudioPlayer";

const FeaturedContentCard = ({ description = "description" }) => {
	return (
		<Layout>
			<Subheader text="Take Your Time" />
			<img className="h-full object-cover" src={coverImage} alt="img" />
			<Paragraph>{description}</Paragraph>
		</Layout>
	);
};

const Layout = ({ children }) => {
	return (
		<>
			{children[0]}
			<div className="grid grid-cols-1 gap-5 lg:grid-cols-2 mx-auto max-w-[1400px]">
				<div
					className=" h-full 
					rounded-xl mx-auto overflow-hidden my-5 flex flex-col items-center border
					"
				>
					{children[1]}
				</div>
				<div className="my-5 h-full border">
					{children[2]}
					<AudioPlayer />
				</div>
			</div>
		</>
	);
};

export default FeaturedContentCard;
