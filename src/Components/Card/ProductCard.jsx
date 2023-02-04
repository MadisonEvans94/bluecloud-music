import React from "react";
import titleFont from "../../assets/Lafonsa Font/Lafonsa.ttf";
import paragraphFont from "../../assets/Univers/Univers-light-normal.ttf";
import styled from "styled-components";

const ProductCardContainer = styled.div`
	display: flex;
	justify-content: space-between;
	justify-self: center;
	max-width: 65rem;
`;
/**
 * A styled component for the ImageContainer
 */
const ImageContainer = styled.div`
	background-image: url(${(props) => props.backgroundImg});
	background-size: cover;
	background-position: center;
	min-width: 20rem;
	min-height: 20rem;
	max-height: 30rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 20px;
`;

/**
 * A styled component for the title
 */
const Title = styled.h2`
	font-family: "Title Font", sans-serif;

	@font-face {
		font-family: "Title Font";
		src: url(${titleFont}) format("truetype");
		font-weight: normal;
		font-style: normal;
	}
	color: white;
	font-size: 60px;
	font-weight: bold;
	margin-bottom: 10px;
`;

/**
 * A styled component for the description
 */
const Description = styled.p`
	color: white;
	font-size: 16px;
	margin-bottom: 10px;

	font-family: "Paragraph Font", sans-serif;

	@font-face {
		font-family: "Paragraph Font";
		src: url(${paragraphFont});
	}
`;

/**
 * A styled component for the price
 */
const Price = styled.p`
	color: white;
	font-size: 18px;
	font-weight: bold;
`;

/**
 * A card component that displays a background image, title, description, and price
 *
 * @param {string} backgroundImg - The URL of the background image
 * @param {string} title - The title to be displayed
 * @param {string} description - The description to be displayed
 * @param {string} price - The price to be displayed
 */
const ProductCard = ({ backgroundImg, title, description, price }) => (
	<>
		<ProductCardContainer>
			<div
				style={{
					margin: "1rem 1rem 1rem 1rem",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					alignItems: "space-between",
					width: "fit-content",
					maxWidth: "40rem",
				}}>
				<Title>{title}</Title>
				<hr
					style={{
						color: "white",
						border: "none",
						backgroundColor: "white",
						width: "100%",
						height: "1px",
					}}
				/>
				<Description>{description}</Description>
				<Price>{price}</Price>
			</div>
			<ImageContainer backgroundImg={backgroundImg}></ImageContainer>
		</ProductCardContainer>
	</>
);

export default ProductCard;
