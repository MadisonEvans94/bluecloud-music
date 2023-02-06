import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/**
 * Navigation component that displays the navigation links of the app
 * @function
 * @returns {JSX.Element}
 */
const Navigation = () => {
	return (
		<>
			<div style={{ position: "absolute", top: "0", left: "0", width: "100%" }}>
				<NavContainer>
					<NavLink to="/home">Store</NavLink>
					<NavLink to="/home/music">Music</NavLink>
					<NavLink to="/home/contact">Contact</NavLink>
					{/* <NavLink to="/home/checkout">Checkout</NavLink> */}
				</NavContainer>
				<hr
					style={{
						color: "white",
						border: "none",
						backgroundColor: "white",
						width: "100%",
						height: "1px",
					}}
				/>
			</div>
		</>
	);
};

/**
 * Styled component for the navigation container
 */
const NavContainer = styled.nav`
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 6rem;
	color: #fff;
`;

/**
 * Styled component for the navigation links
 */
const NavLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	margin-right: 1rem;
	&:hover {
		color: #aaa;
	}
`;

export default Navigation;
