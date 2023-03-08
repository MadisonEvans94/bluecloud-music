import React from "react";
import "../../Pages/Music/Music.css";
import ReactPlayer from "react-player";

const CatalogItem = ({ url, animationComplete }) => {
	const urlColorWrapper = `${url}?color=0064BE`;

	if (animationComplete) {
		return (
			<div className="catalog-item w-10 h-10">
				<ReactPlayer
					url={`${url}?color=0064BE`}
					playing={false}
					controls={true}
					width="100%"
				/>
			</div>
		);
	} else {
		return (
			<>
				<div className="catalog-item w-full h-full bg-white">loading</div>
			</>
		);
	}
};

export default CatalogItem;
