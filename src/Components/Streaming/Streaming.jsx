import React from "react";
import { BsSpotify } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";
const Streaming = () => {
	return (
		<div
			className="streaming
            h-full flex flex-row justify-around items-center
    		">
			<div className="w-full h-full flex flex-row items-center justify-center">
				<BsSpotify size="10em" color="white" />
			</div>
			<div className="w-full h-full flex flex-row items-center justify-center">
				<FaApple size="10em" color="white" />
			</div>
			<div className="w-full h-full flex flex-row items-center justify-center">
				<FaSoundcloud size="10em" color="white" />
			</div>
		</div>
	);
};

export default Streaming;
