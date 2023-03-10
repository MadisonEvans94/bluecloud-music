import React from "react";
import "../../Pages/Music/Music.css";
import ReactPlayer from "react-player";
import ref from "../../assets/ref.png";
const CatalogItem = ({ url }) => {
	const urlColorWrapper = `${url}?color=0064BE`;
	return (
		<>
			<div
				className=" border mx-auto mt-8
			w-60 h-60
			md:w-60 md:h-60 
			lg:w-60 lg:h-60">
				<img src={ref} alt="pi" />
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
// 				w-60 h-60
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
