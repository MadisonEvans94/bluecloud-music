import React from "react";
import Subheader from "./Subheader";
import coverImage from "../../assets/im3.png";
const FeaturedContentCard = ({ description = "description" }) => {
	return (
		<div className="border">
			<Subheader text="Take Your Time" />
			<div className="border m-5">
				<div>
					<img src={coverImage} alt="img" />
				</div>
				<div>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default FeaturedContentCard;
