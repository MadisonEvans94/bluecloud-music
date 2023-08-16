import React from "react";

const ImageContainer = ({ src = "", altText = "caption" }) => {
	return (
		<div className="my-5 border w-full">
			<img src={src} alt={altText} />
		</div>
	);
};

export default ImageContainer;
