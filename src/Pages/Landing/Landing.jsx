import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Clouds from "../../Components/Clouds/Clouds";
import "./Landing.css";
import styled from "styled-components";
// whileTap={{ scale: 0.9 }}

const LandingTitle = styled.h1`
	position: absolute;

	color: blue; 
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
			<Link to="/home/music">
				<LandingTitle onClick={() => setIsClicked((prev) => !prev)}>
					blue cloud
				</LandingTitle>
			</Link>

			<Clouds isClicked={isClicked} />
		</>
	);
};

export default Landing;
