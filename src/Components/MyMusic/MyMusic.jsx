import React from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
import img from "../../assets/images/songImg.png";
import CatalogContainer from "../CatalogContainer/CatalogContainer";

const MyMusic = () => {
	return (
		<div className="my-music-container">
			<h2 className="my-music-header">My Music</h2>
			<CatalogContainer>
				<CatalogItem img={img} />
			</CatalogContainer>
		</div>
	);
};

export default MyMusic;
