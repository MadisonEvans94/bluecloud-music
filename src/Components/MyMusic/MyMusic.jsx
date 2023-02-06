import React from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
import img from "../../assets/images/songImg.png";

const MyMusic = () => {
	return (
		<div className="my-music-container">
			<h2 className="my-music-header">My Music</h2>

			<div className="music-list-card">
				<CatalogItem img={img} />
				<CatalogItem img={img} />
			</div>
		</div>
	);
};

export default MyMusic;
