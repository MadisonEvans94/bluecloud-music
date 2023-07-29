import React from "react";
import playButton from "../../assets/Figma/icons/playButton.svg";

function AudioPlayer() {
	return (
		<div className="h-[110px] rounded-full flex flex-row items-center w-full max-w-[390px] border border-info sm:max-w-[360px] md:max-w-[520px] lg:max-w-[620px] xl:max-w-[720px] ">
			<img
				className="w-[48px] cursor-pointer h-[48px] ml-[35px] drop-shadow-default hover:drop-shadow-hover active:drop-shadow-active transition "
				src={playButton}
				alt="playButton"
			/>
			<div className="border w-full mx-8 h-16">
				audio waveform goes here
			</div>
		</div>
	);
}

export default AudioPlayer;
