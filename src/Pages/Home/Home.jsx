import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../Components/Navigation/Navigation";
import Navbar from "../../Components/Navigation/Navbar";
import ResponsiveNav from "../../Components/Navigation/ResponsiveNav";
// const backgroundColor = "rgb(175,220,255)";

const Home = () => {
	return (
		<>
			<div className="home-container">
				{/* <Navigation /> */}
				{/* <Navbar /> */}
				<ResponsiveNav />
				<Outlet />
			</div>
		</>
	);
};

export default Home;
