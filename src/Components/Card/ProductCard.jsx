import React, { useMemo } from "react";
import titleFont from "../../assets/Lafonsa Font/Lafonsa.ttf";
import styled from "styled-components";
import "./ProductCard.css";
import { motion } from "framer-motion";

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

const MemoizedImageContainer = React.memo(ImageContainer);

const ProductCard = ({ backgroundImg, title, description }) => {
	const memoizedImageContainer = useMemo(() => {
		return <MemoizedImageContainer backgroundImg={backgroundImg} />;
	}, [backgroundImg]);

	return (
		<>
			<motion.div
				className="product-card"
				initial={{ y: 600, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 40, damping: 10 }}>
				<div className="product-card-text">
					<Title>{title}</Title>
					<p className="description">{description}</p>
				</div>
				{memoizedImageContainer}
			</motion.div>
		</>
	);
};

export default ProductCard;
