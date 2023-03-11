import React from "react";
import "../../Pages/Music/Music.css";
import { Spotify } from "react-spotify-embed";

const CatalogItem = ({ url }) => {
	return (
		<>
			<div
				className=" 
				w-80 h-60 mx-auto
			
				">
				<Spotify link={url} width="100%" height="100%" theme="white" />
			</div>
		</>
	);
};
export default CatalogItem;
