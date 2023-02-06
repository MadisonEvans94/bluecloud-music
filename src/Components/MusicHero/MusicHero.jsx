import React from "react";

const MusicHero = ({ icon }) => {
	return (
		<div className="music-link-container">
			<a href="https://open.spotify.com/artist/3W9mqyUptTa6FdiwM9SH11">
				<img className="music-link-icon" src={icon} alt="logo" />
			</a>
			<a href="https://open.spotify.com/artist/3W9mqyUptTa6FdiwM9SH11">
				<img className="music-link-icon" src={icon} alt="logo" />
			</a>
			<a href="https://open.spotify.com/artist/3W9mqyUptTa6FdiwM9SH11">
				<img className="music-link-icon" src={icon} alt="logo" />
			</a>
		</div>
	);
};

export default MusicHero;
