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
			waveColor: "blue",
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
			<div className="flex flex-row border items-center">
				<button
					onClick={handlePlayPause}
					className="text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
				>
					{isPlaying ? (
						<img src={pauseButton} alt="pause" />
					) : (
						<img src={playButton} alt="play" />
					)}
				</button>
				<div
					className={`p-4 rounded w-full max-w-[600px] mx-auto mt-10 ${className}`}
				>
					<div ref={waveformRef} className="relative mb-4" />
				</div>
			</div>
		</>
	);
};

export default AudioPlayer;
