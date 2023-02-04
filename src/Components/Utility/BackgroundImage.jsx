import React from "react";
import styled from "styled-components";

const BackgroundContainer = styled.div`
	background-image: url(${(props) => props.imageSrc});
	background-repeat: no-repeat;
	background-size: contain;
	background-color: rgba(255, 255, 255, 0.1);
	height: 100%;
	width: 100%;
`;

const BackgroundImage = ({ imageSrc }) => (
	<BackgroundContainer imageSrc={imageSrc} />
);

export default BackgroundImage;
