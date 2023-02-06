import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../Components/Navigation/Navigation";

const backgroundColor = "#2ca7ff";

const Home = () => {
	return (
		<>
			<div
				style={{
					top: "0",
					position: "fixed",
					backgroundColor: `${backgroundColor}`,
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-start",
					alignItems: "center",
					width: "100%",
					height: "100%",
				}}>
				<Navigation />

				<Outlet />
			</div>
		</>
	);
};

export default Home;
