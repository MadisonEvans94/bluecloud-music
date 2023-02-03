import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/**
 * 
 * The ProductCard component receives a product prop and displays its image, name, price, and a button to add the product to the cart.

The ProductList component receives an array of products as a prop and maps over it to render a ProductCard component for each product.
 */
// const ProductCardContainer = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	padding: 1rem;
// 	border: 1px solid lightgray;
// 	border-radius: 10px;
// 	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
// 	margin: 1rem;
// `;

// const ProductImage = styled.img`
// 	width: 100%;
// 	height: 200px;
// 	object-fit: cover;
// 	border-radius: 10px;
// `;

// const ProductName = styled.h3`
// 	margin-top: 1rem;
// `;

// const ProductPrice = styled.p`
// 	margin-top: 0.5rem;
// 	font-weight: bold;
// `;

// const AddToCartButton = styled.button`
// 	margin-top: 1rem;
// 	padding: 0.5rem 1rem;
// 	background-color: blue;
// 	color: white;
// 	border-radius: 5px;
// 	border: none;
// 	cursor: pointer;
// `;

// const ProductCard = ({ product }) => {
// 	return (
// 		<ProductCardContainer>
// 			<ProductImage src={product.image} alt={product.name} />
// 			<ProductName>{product.name}</ProductName>
// 			<ProductPrice>${product.price}</ProductPrice>
// 			<AddToCartButton>Add to Cart</AddToCartButton>
// 		</ProductCardContainer>
// 	);
// };

// const ProductListContainer = styled.div`
// 	display: flex;
// 	flex-wrap: wrap;
// 	justify-content: space-between;
// `;

// const ProductList = ({ products }) => {
// 	return (
// 		<ProductListContainer>
// 			{products.map((product) => (
// 				<ProductCard key={product.id} product={product} />
// 			))}
// 		</ProductListContainer>
// 	);
// };

// export default ProductList;

// import React from 'react';
// import styled from 'styled-components';

// const ButtonContainer = styled.button`
//   padding: 0.5rem 1rem;
//   background-color: blue;
//   color: white;
//   border-radius: 5px;
//   border: none;
//   cursor: pointer;
// `;

// const Button = ({ children, onClick }) => {
//   return (
//     <ButtonContainer onClick={onClick}>
//       {children}
//     </ButtonContainer>
//   );
// };

// export default Button;

/**
 * You can use this button component in other components as follows:


import React from 'react';
import Button from './Button';

const App = () => {
  return (
    <div>
      <Button onClick={() => alert('Button clicked!')}>Click me!</Button>
    </div>
  );
};

export default App;
 */
