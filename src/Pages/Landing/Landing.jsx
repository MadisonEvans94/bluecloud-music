import React from "react";

import { Link } from "react-router-dom";
import Clouds from "../../Components/Clouds/Clouds";
import styled from "styled-components";

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
				<h1 style={{ color: "white", fontSize: "5rem" }}>blue cloud</h1>
			</div>
			<Clouds />
		</>
	);
};

export default Landing;
