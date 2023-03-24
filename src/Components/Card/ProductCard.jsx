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
				className="product-card asdf"
				initial={{ y: 300, opacity: 0 }}
				animate={{
					y: 0,
					opacity: 1,
					transition: { type: "spring", stiffness: 40, damping: 10 },
				}}
				exit={{
					y: 300,
					opacity: 0,
					transition: { type: "tween", ease: "easeInOut", duration: 0.8 },
				}}>
				<div className="product-card-text">
					<h className="product-card-title">{title}</h>
					<p className="description">{description}</p>
				</div>
			</motion.div>
		</>
	);
};

export default ProductCard;
