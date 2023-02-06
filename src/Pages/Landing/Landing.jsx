import React from "react";

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
	return (
		<>
			<Link to="/home">
				<LandingTitle>blue cloud</LandingTitle>
			</Link>

			<Clouds />
		</>
	);
};

export default Landing;
