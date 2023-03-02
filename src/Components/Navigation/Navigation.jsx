import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Navigation.css";
const Navigation = () => {
	return (
		<>
			<div style={{ top: "0", left: "0", width: "100%" }} className="nav">
				<div className="nav-container">
					<Link to="/home/store">Store</Link>
					<Link to="/home/music">Music</Link>
					<Link to="/home/contact">Contact</Link>
				</div>
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
const NavContainer = styled.nav``;

/**
 * Styled component for the navigation links
 */
const NavLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	margin-right: 1rem;
`;

export default Navigation;
