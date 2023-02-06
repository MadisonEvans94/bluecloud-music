import React from "react";

import { Link } from "react-router-dom";
import Clouds from "../../Components/Clouds/Clouds";
import "./Landing.css";
import styled from "styled-components";

const LandingTitle = styled.h1`
	position: absolute;
	color: white; 
	font-size:5rem; 
	width: fit-content;  
	height; 100%;
	left: 50%; 
	bottom: 30%; 
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
