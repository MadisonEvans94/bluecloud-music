import React from "react";
import spotifyLogo from "../../assets/svg/iOS/spotify-icon.svg";
import "./Music.css";
import featuredImg from "../../assets/images/badsnacks-reference-img.png";
// [ ] apple and soundcloud logo]
// [x] page grid layout
// [ ] complete the featured section
// [ ] complete the connect section
const Music = () => {
	return (
		<>
			<div className="music-page-container">
				<div className="music-link-container">
					<a href="https://open.spotify.com/artist/3W9mqyUptTa6FdiwM9SH11">
						<img className="music-link-icon" src={spotifyLogo} alt="logo" />
					</a>
					<a href="https://open.spotify.com/artist/3W9mqyUptTa6FdiwM9SH11">
						<img className="music-link-icon" src={spotifyLogo} alt="logo" />
					</a>
					<a href="https://open.spotify.com/artist/3W9mqyUptTa6FdiwM9SH11">
						<img className="music-link-icon" src={spotifyLogo} alt="logo" />
					</a>
				</div>

				<div className="featured-container">
					<div className="featured-card">
						<h1 className="featured-title">Featured</h1>
						<div className="featured-content">
							<img src={featuredImg} alt="" />
							<p className="featured-description">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Officia, odio magnam?
							</p>
						</div>
						<p className="featured-links">
							<ul>
								<li>spotify</li>
								<li>apple music</li>
								<li>bad snacks page</li>
							</ul>
						</p>
					</div>
				</div>

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
