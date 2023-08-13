import React, { useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import pauseButton from "../../assets/Figma/icons/pauseButton.svg";
import playButton from "../../assets/Figma/icons/playButton.svg";

const AudioPlayer = ({ className, url }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const waveformRef = useRef(null);
	const wavesurfer = useRef(null);

	React.useEffect(() => {
		wavesurfer.current = WaveSurfer.create({
			container: waveformRef.current,
			waveColor: "#FCFCFC",
			progressColor: "darkblue",
			cursorColor: "gray",
			barWidth: 4,
			height: 80,
		});

		wavesurfer.current.load(url);

		return () => {
			wavesurfer.current.destroy();
		};
	}, [url]);

	const handlePlayPause = () => {
		setIsPlaying(!isPlaying);
		if (isPlaying) {
			wavesurfer.current.pause();
		} else {
			wavesurfer.current.play();
		}
	};

	return (
		<>
			{/*  */}
			<div className="flex flex-row bg-primary rounded-full items-center px-4">
				<div className="px-4 flex flex-row justify-center items-center h-full">
					{isPlaying ? (
						<img
							onClick={handlePlayPause}
							className="cursor-pointer text-white drop-shadow-default hover:drop-shadow-hover active:drop-shadow-active transition"
							src={pauseButton}
							alt="pause"
						/>
					) : (
						<img
							onClick={handlePlayPause}
							className="cursor-pointer text-white drop-shadow-default hover:drop-shadow-hover active:drop-shadow-active transition"
							src={playButton}
							alt="play"
						/>
					)}
				</div>
				<div
					className={`rounded w-full max-w-[600px] mx-auto ${className}`}
				>
					<div ref={waveformRef} className="relative" />
				</div>
			</div>
		</>
	);
};

export default AudioPlayer;
