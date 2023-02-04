import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: center;
	color: white;
`;

const Title = styled.div`
	font-size: 1.2rem;
	font-weight: bold;
	margin-bottom: 1rem;
`;

const Controls = styled.div`
	display: flex;
	align-items: center;
	margin-top: 1rem;
`;

const Button = styled.div`
	margin: 0 0.25rem;
	padding: 0.25rem;
	cursor: pointer;
`;

const AddToBasketButton = () => {
	const [qty, setQty] = useState(0);
	const handleIncrease = () => setQty(qty + 1);
	const handleDecrease = () => (qty > 0 ? setQty(qty - 1) : null);
	return (
		<Container>
			<Title>Add to Basket</Title>
			<Controls>
				<Button onClick={handleDecrease}>-</Button>
				<div>{qty}</div>
				<Button onClick={handleIncrease}>+</Button>
			</Controls>
		</Container>
	);
};

export default AddToBasketButton;
