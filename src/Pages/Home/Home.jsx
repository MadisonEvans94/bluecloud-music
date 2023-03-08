import React from "react";
import { Outlet } from "react-router-dom";
import ResponsiveNav from "../../Components/Navigation/ResponsiveNav";
// const backgroundColor = "rgb(175,220,255)";

const Home = () => {
	return (
		<>
			<div className="home-container">
				<ResponsiveNav />
				<Outlet />
			</div>
		</>
	);
};

export default Home;
