import React from "react";

const CatalogItem = ({ song, img }) => {
	return (
		<>
			<div className="catalog-item">
				<div className="song-overlay" />
				<img src={img} alt="" />
			</div>
		</>
	);
};

export default CatalogItem;
