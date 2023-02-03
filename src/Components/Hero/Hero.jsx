import React from "react";
import styled from "styled-components";

/**
 * Styled component for the hero container
 */
const HeroContainer = styled.div`
	width: 100%;
	height: 500px;
	background-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.5),
			rgba(0, 0, 0, 0.5)
		),
		url(${(props) => props.backgroundImage});
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

/**
 * Styled component for the hero title
 */
const HeroTitle = styled.h1`
	font-size: 40px;
	font-weight: bold;
	color: white;
	text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
`;

/**
 * Styled component for the hero subtitle
 */
const HeroSubtitle = styled.h2`
	font-size: 30px;
	color: white;
	text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
	margin-top: 20px;
`;

/**
 * Component that displays a hero section with title and subtitle
 * @function
 * @param {string} title - Title of the hero
 * @param {string} subtitle - Subtitle of the hero
 * @param {string} backgroundImage - URL of the background image
 * @returns {JSX.Element}
 */
const Hero = ({ title, subtitle, backgroundImage }) => {
	return (
		<HeroContainer backgroundImage={backgroundImage}>
			<HeroTitle>{title}</HeroTitle>
			<HeroSubtitle>{subtitle}</HeroSubtitle>
		</HeroContainer>
	);
};

export default Hero;
