import React from "react";

import { Link } from "react-router-dom";
import Clouds from "../../Components/Clouds/Clouds";
import "./Landing.css";

const Landing = () => {
	return (
		<>
			<div
				style={{
					position: "absolute",
					left: "50%",
					bottom: "30%",
					transform: "translate(-50%, -50%)",
				}}>
				<Link to="/home">
					<h1 style={{ color: "white", fontSize: "5rem" }}>blue cloud</h1>
				</Link>
			</div>
			<Clouds />
		</>
	);
};

export default Landing;
