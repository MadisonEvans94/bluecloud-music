import React from "react";
import styled from "styled-components";

/**
 * Styled component for the card container
 */
const CardContainer = styled.div`
	width: 300px;
	height: 400px;
	background-color: white;
	border-radius: 10px;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	margin: 20px auto;
`;

/**
 * Styled component for the card image
 */
const CardImage = styled.img`
	width: 100%;
	height: 200px;
	object-fit: cover;
`;

/**
 * Styled component for the card title
 */
const CardTitle = styled.h2`
	font-size: 22px;
	font-weight: bold;
	margin: 20px;
	text-align: center;
`;

/**
 * Styled component for the card description
 */
const CardDescription = styled.p`
	font-size: 16px;
	margin: 20px;
	text-align: justify;
`;

/**
 * Component that displays a card with image, title, and description
 * @function
 * @param {string} image - URL of the image to display
 * @param {string} title - Title of the card
 * @param {string} description - Description of the card
 * @returns {JSX.Element}
 */
const Card = ({ image, title, description }) => {
	return (
		<CardContainer>
			<CardImage src={image} alt={title} />
			<CardTitle>{title}</CardTitle>
			<CardDescription>{description}</CardDescription>
		</CardContainer>
	);
};

export default Card;
