import React, { useMemo } from "react";
// import titleFont from "../../assets/Lafonsa Font/Lafonsa.ttf";
import styled from "styled-components";
import "./ProductCard.css";
import { motion } from "framer-motion";
import ImageContainer from "./ImageContainer";
// const ImageContainer = styled.div`
// 	background-image: url(${(props) => props.backgroundImg});
// `;

// const Title = styled.h2`
// 	font-family: "Title Font", sans-serif;

// 	@font-face {
// 		font-family: "Title Font";
// 		src: url(${titleFont}) format("truetype");
// 		font-weight: normal;
// 		font-style: normal;
// 	}
// 	color: white;
// 	font-size: 60px;
// 	font-weight: bold;
// 	margin-bottom: 10px;
// `;

const ProductCard = ({ backgroundImg, title, description }) => {
	return (
		<>
			<motion.div
				className="product-card"
				initial={{ y: 600, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 40, damping: 10 }}>
				<div className="product-card-text">
					<h className="product-card-title">{title}</h>
					<p className="description">{description}</p>
				</div>
				<ImageContainer>{backgroundImg}</ImageContainer>
			</motion.div>
		</>
	);
};

export default ProductCard;
