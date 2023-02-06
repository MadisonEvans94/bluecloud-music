import React from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
const song = {
	data: "data",
};
const MyMusic = () => {
	return (
		<div className="my-music-container">
			<h2 className="my-music-header">My Music</h2>

			<div className="music-list-card">
				<CatalogItem song={song} />
				<CatalogItem song={song} />
				<CatalogItem song={song} />
				<CatalogItem song={song} />
			</div>
		</div>
	);
};

export default MyMusic;
