import React from "react";
import titleFont from "../../assets/Lafonsa Font/Lafonsa.ttf";
import styled from "styled-components";
import "./ProductCard.css";

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

const ProductCard = ({ backgroundImg, title, description, price }) => (
	<>
		<div className="product-card">
			<div className="product-card-text">
				<Title>{title}</Title>
				<p className="description">{description}</p>
			</div>
			<ImageContainer backgroundImg={backgroundImg}></ImageContainer>
		</div>
	</>
);

export default ProductCard;
