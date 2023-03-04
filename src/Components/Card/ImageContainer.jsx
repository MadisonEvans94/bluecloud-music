import React from "react";

const imgStyle = {
	width: "100%",
	height: "100%",
};

const ImageContainer = ({ children }) => {
	return (
		<div className="image-container">
			{/* <img src={children} alt="product-img" style={imgStyle} /> */}
		</div>
	);
};

export default ImageContainer;
