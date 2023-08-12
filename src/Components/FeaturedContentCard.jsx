import React from "react";
import Subheader from "./Subheader";
import Paragraph from "./utility/Paragraph";
import AudioPlayer from "./AudioPlayer";

const FeaturedContentCard = ({
	title = "",
	description = "description",
	coverImage = "",
}) => {
	return (
		<Layout>
			<Subheader text={title} />
			{coverImage}
			<Paragraph>{description}</Paragraph>
		</Layout>
	);
};

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 max-w-[1400px] mx-auto">
			<div className="order-2 lg:order-1 lg:row-span-3 overflow-hidden rounded-xl my-5 flex flex-col items-center">
				<img
					className="h-full object-cover"
					src={children[1]}
					alt="img"
				/>
			</div>
			<div className="order-1 lg:order-2">{children[0]}</div>
			<div className="order-3 my-5 h-full flex flex-col justify-start">
				{children[2]}
				<AudioPlayer className="my-5" />
			</div>
		</div>
	);
};

export default FeaturedContentCard;
