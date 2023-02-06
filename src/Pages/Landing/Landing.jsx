import React from "react";

import { Link } from "react-router-dom";
import Clouds from "../../Components/Clouds/Clouds";
import "./Landing.css";
import styled from "styled-components";

const LandingLinkContainer = styled`
position: absolute;
left: 50%; 
bottom: 30%; 
transform: translate(-50%, -50%);
`;

const BlueCloudHeader = styled`

color: white; 
font-size: 5rem; 

`;

const Landing = () => {
	return (
		<>
			<LandingLinkContainer>
				<Link to="/home">
					<BlueCloudHeader>blue cloud</BlueCloudHeader>
				</Link>
			</LandingLinkContainer>
			<Clouds />
		</>
	);
};

export default Landing;
