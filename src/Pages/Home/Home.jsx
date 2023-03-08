import React from "react";
import { Outlet } from "react-router-dom";
import ResponsiveNav from "../../Components/Navigation/ResponsiveNav";
// const backgroundColor = "rgb(175,220,255)";
import MusicHero from "../../Components/MusicHero/MusicHero";
const Home = () => {
	return (
		<>
			<div className="home-container">
				<ResponsiveNav />
				<MusicHero />
				<Outlet />
			</div>
		</>
	);
};

export default Home;
