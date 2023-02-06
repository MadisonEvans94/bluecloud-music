import React from "react";
import spotifyLogo from "../../assets/svg/iOS/spotify-icon.svg";
import "./Music.css";
// [ ] apple and soundcloud logo]
// [ ] page grid layout
// [ ] complete the featured section
// [ ] complete the connect section
const Music = () => {
	return (
		<>
			<div className="music-page-container">
				{/* .div1 */}
				<div className="music-link-container">
					{/* <a href="https://open.spotify.com/artist/3W9mqyUptTa6FdiwM9SH11">
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
				</a> */}
				</div>
				{/* .div2 */}
				<div className="featured-container">
					<div className="featured-card">
						<h1 className="featured-title">Featured</h1>
						<div>
							<img src="" alt="" />
							<p className="featured-description"></p>
						</div>
					</div>
				</div>
				{/* .div3 */}
				<div className="connect-container">
					<div className="connect-card">
						<h2 className="connect-header">Connect</h2>
						<p className="connect-links">
							<ul>
								<li>link</li>
								<li>link</li>
								<li>link</li>
							</ul>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Music;
