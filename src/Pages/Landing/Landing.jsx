import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Clouds from "../../Components/Clouds/Clouds";
import "./Landing.css";
import styled from "styled-components";
// whileTap={{ scale: 0.9 }}

const LandingTitle = styled.h1`
	position: absolute;

	color: white; 
	font-size:5rem; 
	width: fit-content;  
	height; 100%;
	left: 50%; 
	bottom: 20%; 
	transform: translate(-50%, -50%); 
	
`;

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
					<LandingTitle onClick={() => setIsClicked((prev) => !prev)}>
						blue cloud
					</LandingTitle>
				</Link>

				<Clouds isClicked={isClicked} />
			</div>
		</>
	);
};

export default Landing;
