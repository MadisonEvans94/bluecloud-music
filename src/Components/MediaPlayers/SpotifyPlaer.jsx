import React from "react";

const SpotifyPlayer = () => {
	// const embedUrl = embedLink.replace(
	// 	"https://open.spotify.com/",
	// 	"https://open.spotify.com/embed/"
	// );

	return (
		<iframe
			style="border-radius:12px"
			src="https://open.spotify.com/embed/track/79g4tEvmrLXDMiJqUwcbWb?utm_source=generator&theme=0"
			width="100%"
			height="352"
			allowfullscreen=""
			allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
			loading="lazy"
		/>
	);
};

export default SpotifyPlayer;
