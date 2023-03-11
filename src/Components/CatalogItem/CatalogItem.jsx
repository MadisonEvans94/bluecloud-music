import React from "react";
import "../../Pages/Music/Music.css";
import { Spotify } from "react-spotify-embed";

const CatalogItem = ({ url, testImage }) => {
	return (
		<>
			<div
				className=" 
				mx-auto mt-8 w-72 h-72
				">
				{/* <img className="w-full h-full object-cover" src={testImage} alt="pi" /> */}
				<Spotify
					link="https://open.spotify.com/track/79g4tEvmrLXDMiJqUwcbWb"
					width="100%"
					height="100%"
					theme="white"
				/>
			</div>
		</>
	);
};
// const CatalogItem = ({ url, animationComplete }) => {
// 	const urlColorWrapper = `${url}?color=0064BE`;

// 	if (animationComplete) {
// 		return (
// 			<div
// 				className="
// 				w-72 h-72
// 				md:w-72 md:h-72
// 				lg:w-80 lg:h-80
// 				xl:w-96 xl:h-96
// 			">
// 				<ReactPlayer
// 					url={`${urlColorWrapper}`}
// 					playing={false}
// 					controls={true}
// 					width="100%"
// 					height="100%"
// 				/>
// 			</div>
// 		);
// 	} else {
// 		return (
// 			<>
// 				<div className=" bg-white">loading</div>
// 			</>
// 		);
// 	}
// };

export default CatalogItem;
