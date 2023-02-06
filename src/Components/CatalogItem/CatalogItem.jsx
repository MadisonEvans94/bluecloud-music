import React, { useMemo } from "react";
import "./CatalogItem.css";
import ReactPlayer from "react-player";

const CatalogItem = ({ url }) => {
	const urlColorWrapper = `${url}?color=0064BE`;

	const memoizedUrl = useMemo(() => {
		return urlColorWrapper;
	}, [urlColorWrapper]);

	return (
		<div className="catalog-item">
			<ReactPlayer
				url={memoizedUrl}
				playing={false}
				controls={true}
				width="100%"
			/>
		</div>
	);
};

export default CatalogItem;
