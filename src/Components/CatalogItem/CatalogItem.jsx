import React from "react";
import "../../Pages/Music/Music.css";
import ReactPlayer from "react-player";

const CatalogItem = ({ url }) => {
	const urlColorWrapper = `${url}?color=0064BE`;

	return (
		<div className="catalog-item w-10 h-10 bg-white">
			<ReactPlayer url={null} playing={false} controls={true} width="100%" />
		</div>
	);
};

export default CatalogItem;
