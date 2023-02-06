import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Clouds from "../../Components/Clouds/Clouds";
import "./Landing.css";

const Landing = () => {
	const [isClicked, setIsClicked] = useState(false);
	return (
		<>
			<div
				style={{
					position: "absolute",
					left: "0",
					right: "0",
					top: "0",
					bottom: "0",
					backgroundColor: "#2ea8ff",
					zIndex: "-10",
				}}>
				<Link to="/home/music">
					<h1
						className="landing-title"
						onClick={() => setIsClicked((prev) => !prev)}>
						blue cloud
					</h1>
				</Link>

				<Clouds isClicked={isClicked} />
			</div>
		</>
	);
};

export default Landing;
