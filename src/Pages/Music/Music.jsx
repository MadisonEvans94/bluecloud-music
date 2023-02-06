import React from "react";
import spotifyIcon from "../../assets/svg/iOS/spotify-icon.svg";
import soundcloudIcon from "../../assets/svg/soundcloud-icon.svg";
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
						<img className="music-link-icon" src={spotifyIcon} alt="logo" />
					</a>
					<a href="https://open.spotify.com/artist/3W9mqyUptTa6FdiwM9SH11">
						<img className="music-link-icon" src={spotifyIcon} alt="logo" />
					</a>
					<a href="https://open.spotify.com/artist/3W9mqyUptTa6FdiwM9SH11">
						<img className="music-link-icon" src={spotifyIcon} alt="logo" />
					</a>
				</div>

				<div className="featured-container">
					<div className="featured-card">
						<h1 className="featured-title">Featured</h1>
						<div className="featured-content">
							<img src={featuredImg} alt="" />
							<p className="featured-description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
								sunt voluptatum veniam eligendi magni quaerat voluptas illo
								blanditiis earum omnis, soluta ipsam, eveniet est. Recusandae ut
								rum dolor aut! Delectus nulla in corrupti eum iure rerum maiores
								voluptatibus sint iste quidem, beatae sunt.
							</p>
						</div>

						{/* <p className="featured-links">
							<ul>
								<li>spotify</li>
								<li>apple music</li>
								<li>bad snacks page</li>
							</ul>
						</p> */}
					</div>
				</div>

				<div className="my-music-container">
					<div className="my-music-card">
						<h2 className="my-music-header">My Music</h2>

						<div className="catalog-container">
							<div className="catalog-item">catalog item</div>
							<div className="catalog-item">catalog item</div>
							<div className="catalog-item">catalog item</div>
							<div className="catalog-item">catalog item</div>
							<div className="catalog-item">catalog item</div>
							<div className="catalog-item">catalog item</div>
							<div className="catalog-item">catalog item</div>
							<div className="catalog-item">catalog item</div>
							<div className="catalog-item">catalog item</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Music;
