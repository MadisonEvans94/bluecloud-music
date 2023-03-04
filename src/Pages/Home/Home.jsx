import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navigation/Navbar";
// const backgroundColor = "rgb(175,220,255)";

const Home = () => {
	return (
		<>
			<div className="home-container">
				{/* <Navigation /> */}
				<Navbar />
				<Outlet />
			</div>
		</>
	);
};

export default Home;
