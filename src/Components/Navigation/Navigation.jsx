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
		<NavContainer>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/services">Services</NavLink>
			<NavLink to="/contact">Contact</NavLink>
		</NavContainer>
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
	padding: 1rem;
	background-color: #333;
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
