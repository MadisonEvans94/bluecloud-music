import React from "react";
import "../../Pages/Music/Music.css";
import ReactPlayer from "react-player";

const CatalogItem = ({ url, animationComplete }) => {
	const urlColorWrapper = `${url}?color=0064BE`;

	if (animationComplete) {
		return (
			<div
				className="
			w-60 h-60 
			md:w-72 md:h-72">
				<ReactPlayer
					url={`${urlColorWrapper}`}
					playing={false}
					controls={true}
					width="100%"
					height="100%"
				/>
			</div>
		);
	} else {
		return (
			<>
				<div className=" bg-white">loading</div>
			</>
		);
	}
};

export default CatalogItem;
