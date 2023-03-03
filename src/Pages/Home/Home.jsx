import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../Components/Navigation/Navigation";

// const backgroundColor = "rgb(175,220,255)";

const Home = () => {
	return (
		<>
			<div className="home-container">
				<Navigation />

				<Outlet />
			</div>
		</>
	);
};

export default Home;
