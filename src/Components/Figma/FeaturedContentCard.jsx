import React from "react";
import Subheader from "./Subheader";
import coverImage from "../../assets/im3.png";
import Paragraph from "./Paragraph";

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
			<div>
				{children[0]}
				<div className="rounded-xl overflow-hidden my-5">
					{children[1]}
				</div>
				<div className="pb-5">{children[2]}</div>
			</div>
		</>
	);
};

export default FeaturedContentCard;
