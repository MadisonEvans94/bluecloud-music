import React from "react";
import Clouds from "../../components/Clouds/Clouds";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
	return (
		<>
			<Clouds />

			<div className="home--container">
				<h1 id="landing-title">
					<Link to="/main">
						<h1>blue cloud</h1>
					</Link>
				</h1>
			</div>
		</>
	);
};

export default Landing;
