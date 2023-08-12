import React, { useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

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
			height: 80
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
	<div className={`bg-white p-4 rounded shadow-md w-full mx-auto mt-10 ${className}`}>
		<div ref={waveformRef} className="relative mb-4">
	
		</div>
		<button 
			onClick={handlePlayPause} 
			className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition duration-150 ease-in-out"
		>
        {isPlaying ? "Pause" : "Play"}
		</button>
    </div>
	);
};

export default AudioPlayer;
