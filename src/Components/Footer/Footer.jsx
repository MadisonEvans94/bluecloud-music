import React from "react";
import styled from "styled-components";

/**
 * Footer component that displays the footer of the app, including copyright information and links to the company's social media profiles.
 * @function
 * @returns {JSX.Element}
 */
const Footer = () => {
	return (
		<FooterContainer>
			<p>&copy; {new Date().getFullYear()} Company Name</p>
			<SocialLinks>
				<a href="https://twitter.com/company">
					<i className="fab fa-twitter"></i>
				</a>
				<a href="https://facebook.com/company">
					<i className="fab fa-facebook-f"></i>
				</a>
				<a href="https://linkedin.com/company">
					<i className="fab fa-linkedin-in"></i>
				</a>
			</SocialLinks>
		</FooterContainer>
	);
};

/**
 * Styled component for the footer container
 */
const FooterContainer = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background-color: #333;
	color: #fff;
`;

/**
 * Styled component for the social links
 */
const SocialLinks = styled.div`
	display: flex;
	a {
		margin-left: 1rem;
		color: #fff;
		&:hover {
			color: #aaa;
		}
	}
`;

export default Footer;
