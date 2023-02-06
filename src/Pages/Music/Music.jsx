import React from "react";
import Featured from "../../Components/Featured/Featured";
import MusicHero from "../../Components/MusicHero/MusicHero";
import spotifyIcon from "../../assets/svg/iOS/spotify-icon.svg";
import soundcloudIcon from "../../assets/svg/soundcloud-icon.svg";
import "./Music.css";
import featuredImg from "../../assets/images/badsnacks-reference-img.png";
// [ ] apple and soundcloud logo]
// [x] page grid layout
// [x] complete the featured section
// [ ] refactor
// [ ] finish completely styling the featured section
// [ ] complete the connect section
const Music = () => {
	return (
		<>
			<div className="music-page-container">
				<MusicHero icon={spotifyIcon} />
				<Featured featuredImg={featuredImg} />
				{/* MyMusic */}
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
