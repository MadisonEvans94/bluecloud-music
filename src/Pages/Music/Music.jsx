import React from "react";
import spotifyLogo from "../../assets/svg/iOS/spotify-icon.svg";

const Music = () => {
	//[ ] add apple svg and link
	//[x] add spotify svg and link

	console.log(spotifyLogo);

	return (
		<>
			<div
				style={{
					display: "flex",
					width: "fit-content",
				}}>
				<a href="https://open.spotify.com/artist/3W9mqyUptTa6FdiwM9SH11">
					<img
						src={spotifyLogo}
						alt="logo"
						style={{
							minWidth: "10rem",
							margin: "2rem",
							color: "white",
						}}
					/>
				</a>
			</div>
		</>
	);
};

export default Music;
