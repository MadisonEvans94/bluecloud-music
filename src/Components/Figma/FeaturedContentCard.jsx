import React from "react";
import Subheader from "./Subheader";
import Paragraph from "./Paragraph";
import AudioPlayer from "./AudioPlayer";

const FeaturedContentCard = ({
	description = "description",
	coverImage = "",
}) => {
	return (
		<Layout>
			<Subheader text="Take Your Time" />
			{coverImage}
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
					rounded-xl mx-auto overflow-hidden my-5 flex flex-col items-center 
					"
				>
					<img
						className="h-full object-cover"
						src={children[1]}
						alt="img"
					/>
				</div>
				<div className="my-5 h-full flex flex-col justify-between">
					{children[2]}

					<AudioPlayer className="my-auto" />
				</div>
			</div>
		</>
	);
};

export default FeaturedContentCard;
