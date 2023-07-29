import React from "react";

const FeaturedContentCard = ({ description = "description" }) => {
	return (
		<div>
			<div>
				<img src="" alt="img" />
			</div>
			<div>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default FeaturedContentCard;
